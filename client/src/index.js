import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './js/App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<HashRouter><App></App></HashRouter>
, document.getElementById('root'));
registerServiceWorker();
