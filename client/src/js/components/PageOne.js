import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PageOne extends Component {

    render() {
        return (
            <div className="home">
                <div className="App-intro">
                    <h1>Page One</h1>
                    <h2>Page One for REACT</h2>

                    <Link to="/">Home</Link> &nbsp;&nbsp;
                    <Link to="/pagetwo">Page Two</Link>
                </div>
            </div>
        );
    }
}

export default PageOne;