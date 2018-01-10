import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {InputText} from 'primereact/components/inputtext/InputText';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ssn: '',
      name: ''
      ,ssnf: ''
    }
  }  
  numOnly = (event, _data) => {
    let _ssn = event.target.value;
    //console.log("ssn " + _ssn + ", length: " + _ssn.length + ", key: " + _data);
    if (_data === '-'){
      if(_ssn.length === 3 || _ssn.length === 6) {
        return;
      }
    }
    let reg = new RegExp("^\\d+$");
    if (_data.length > 0 && !reg.test(_data)) {
      event.preventDefault();
      return;
    }
  }
  alphaOnly = (event, _data) => {
    let reg = new RegExp("^[a-zA-Z-_' ]+$");
    if (_data.length > 0 && !reg.test(_data)) {
      event.preventDefault();
      return;
    }
  }
  nameKeyPress = (event) => {
    let _data = event.key;
    this.alphaOnly(event, _data);
  }
  namePaste = (event) => {
    let _data = event.clipboardData.getData('Text');
    this.alphaOnly(event, _data);
  }
  ssnKeyPress = (event) => {
    let _data = event.key;
    this.numOnly(event, _data);
  }
  ssnPaste = (event) => {
    let _data = event.clipboardData.getData('Text');
    this.numOnly(event, _data);
  }  
  ssnFormat = (event) => {
    let _ssn = event.target.value;
    let _hasIfun = false; 
    let _ssnf = '';
    if (_ssn.length > 0) {
      _hasIfun = _ssn.endsWith("-");
      _ssn = _ssn.replace(/[-]/g, "");
    }
    switch(_ssn.length) {
      case 9:
      case 8:
      case 7:
      case 6:
        _ssnf = _ssn.substr(0,3) + '-' + _ssn.substr(3,2) + '-' + _ssn.substr(5,4);
        break;
      case 5:
      case 4:
        _ssnf = _ssn.substr(0,3) + '-' + _ssn.substr(3,2);
        break;
      default:
        _ssnf = _ssn;
        break;
    }
    if (_hasIfun) {
      _ssnf = _ssnf + '-';
    }
    // console.log("at end: " + _ssnf);
    this.setState({ssnf: _ssnf});
    this.setState({ssn: _ssnf});
    event.target.value = _ssnf;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <span className="ui-float-label">
              <label htmlFor="num-ssn">SSN: </label>
              <InputText id="num-ssn" type="text" size="30" onPaste={this.ssnPaste.bind(this)} onKeyPress={this.ssnKeyPress.bind(this)} onChange={this.ssnFormat.bind(this)} />
          </span>
        </div>
        <div>
          <span className="ui-float-label">
              <label htmlFor="num-ssn">Name: </label>
              <InputText id="num-ssn" type="text" size="30" onPaste={this.namePaste.bind(this)} onKeyPress={this.nameKeyPress} onChange={(e) => this.setState({name: e.target.value})} />
          </span>
        </div>
        <div>
          <span className="ui-float-label">Name: {this.state.name}</span>
        </div>        
        <div>
          <span className="ui-float-label">SSN Raw: {this.state.ssn}</span>
        </div>        
        <div>
          <span className="ui-float-label">SSN : {this.state.ssnf}</span>
        </div>        
      </div>
    );
  }
}

export default App;
