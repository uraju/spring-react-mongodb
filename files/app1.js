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
  ssnKeyPress = (event) => {
    let _char = event.key;
    let reg = new RegExp("^\\d+$");
    if (!reg.test(_char)) {
      event.preventDefault();
    }
  }
  ignoreNumbers = (event) => {
    let _char = event.key;
    let reg = new RegExp("[a-zA-Z ]");
    if (!reg.test(_char)) {
      event.preventDefault();
    }
  }
  namePaste = (event) => {
    let _data = event.clipboardData.getData('Text');
    if (_data.length > 0) {
      console.log(_data);
      let reg = new RegExp("^[a-zA-Z ]+$");
      if (!reg.test(_data)) {
        event.preventDefault();
        return;
      }
    }
  }
  ssnPaste = (event) => {
    let _data = event.clipboardData.getData('Text');
    if (_data.length > 0) {
      let reg = new RegExp("^\\d+$");
      if (!reg.test(_data)) {
        event.preventDefault();
        return;
      }
    }
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
              <InputText id="num-ssn" type="text" size="30" onPaste={this.namePaste.bind(this)} onKeyPress={this.ignoreNumbers} onChange={(e) => this.setState({name: e.target.value})} />
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
