import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PageTwo extends Component {

    render() {
        return (
            <div className="home">
                <div className="App-intro">
                    <h1>Page Two</h1>
                    <h2>Page Two for REACT</h2>

                    <Link to="/">Home</Link>&nbsp;&nbsp;
                    <Link to="/pageone">Page One</Link>
                </div>
            </div>
        );
    }
}

export default PageTwo;
