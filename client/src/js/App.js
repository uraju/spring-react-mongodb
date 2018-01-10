import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { Route, NavLink} from 'react-router-dom';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import '../assets/css/App.css';
import Home from './components/Home'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'

const menuBottom = { // css variable (or a class in css file)
  position: 'fixed',
  bottom: '10px',
}
class AppMenu extends Component {
  
      constructor() {
          super();
          this.state = { activeMenu: -1 };
  }

  render() {
    return (
      <ul className="nav">
        <li><NavLink exact activeClassName="active" to="/" onlyActiveOnIndex>Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/pageone">Page One</NavLink></li>
        <li style={menuBottom}><NavLink activeClassName="active" to="/pagetwo">Page Two</NavLink></li>
      </ul>
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
        <AppMenu />
        <div className="layout-content">
          <Route exact path="/"  component={Home} />
          <Route exact path="/pageone" component={PageOne} />
          <Route exact path="/pagetwo" component={PageTwo} />        
        </div>
      </div>
    );
  }
}

export default App;
