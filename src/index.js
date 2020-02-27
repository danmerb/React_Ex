import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Route} from 'react-router-dom'

const RouterApp = <Route>
    <App/>
</Route>
ReactDOM.render(RouterApp, document.getElementById('root'));

