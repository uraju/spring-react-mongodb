import React, { Component } from 'react';
import logo from '.../assets/images/logo.svg';
import 'font-awesome/css/font-awesome.css';
import '../assets/css/App.css';

class AppOld extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/js/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AppOld;
