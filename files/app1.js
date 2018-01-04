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
  ssnKeyPress(event) {
    // console.log("Pressed code" + event.code);
    // console.log("Pressed Key" + event.key);
    let check = true;
    if (event.key >= 0 && event.key <= 9) {
      check = false;
    }
    if(check) { // ignore the non numeric value
      event.preventDefault();
    }
  }
  ssnOnBlur = (_ssn) => {
    this.setState({ssn: _ssn});
  }
  ignoreNumbers = (event) => {
    if (event.key >= 0 && event.key <= 9) {
      event.preventDefault();
    }
  }
  ssnFormat = (event) => {
    let _ssn = event.target.value;
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
              <InputText id="num-ssn" type="text" size="30" onKeyPress={this.ssnKeyPress.bind(this)} onChange={this.ssnFormat.bind(this)} onBlur={(e) => this.setState({ssn: e.target.value})} />
          </span>
        </div>
        <div>
          <span className="ui-float-label">
              <label htmlFor="num-ssn">Name: </label>
              <InputText id="num-ssn" type="text" size="30" onKeyPress={this.ignoreNumbers} onChange={(e) => this.setState({name: e.target.value})} />
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
