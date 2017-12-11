import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { Route, Link } from 'react-router-dom';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import '../assets/css/App.css';
import Home from './components/Home'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'

class AppMenu extends Component {
  
      constructor() {
          super();
          this.state = { activeMenu: -1 };
  }
  render() {
    return (
      <div className="nav">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pageone">Page One</Link></li>
        <li><Link to="/pagetwo">Page Two</Link></li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div id="layout-content">
          <Route exact path="/" component={Home} />
          <Route path="/pageone" component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />        
        </div>
        <div>
          <AppMenu />
        </div>
      </div>
    );
  }
}

export default App;
