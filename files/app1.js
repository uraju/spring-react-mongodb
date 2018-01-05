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
    let reg = new RegExp("^\\d+$");
    if (_data.length > 0 && !reg.test(_data)) {
      event.preventDefault();
    }
  }
  alphaOnly = (event, _data) => {
    let reg = new RegExp("^[a-zA-Z ]+$");
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
    if (_ssn.length > 0) {
      let reg = new RegExp("[0-9]");
      if (!reg.test(_ssn)) {
        event.preventDefault();
        return;
      }
    }
    let _ssnf = '';
    switch(_ssn.length) {
      case 9:
        _ssnf = _ssn.substr(0,3) + '-' + _ssn.substr(3,2) + '-' + _ssn.substr(5,4);
        break;
      case 8:
        _ssnf = _ssn.substr(0,3) + '-' + _ssn.substr(3,5);
        break;
      case 7:
        _ssnf = _ssn.substr(0,3) + '-' + _ssn.substr(3,4);
        break;
      default:
        _ssnf = _ssn;
        break;
    }
    //console.log(_ssnf);
    this.setState({ssnf: _ssnf});
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
              <InputText id="num-ssn" type="text" size="30" onPaste={this.ssnPaste.bind(this)} onKeyPress={this.ssnKeyPress.bind(this)} onChange={this.ssnFormat.bind(this)} onBlur={(e) => this.setState({ssn: e.target.value})} />
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
