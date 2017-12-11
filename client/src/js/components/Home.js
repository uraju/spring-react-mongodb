import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

    render() {
        return (
            <div className="home">
                <p className="App-intro">
                To get started, edit <code>src/js/App.js</code> with custom css and save to reload.
                </p>
                <Link to="/pageone">Page One</Link> &nbsp;&nbsp;
                <Link to="/pagetwo">Page Two</Link>
            </div>
        );
    }
}

export default Home;