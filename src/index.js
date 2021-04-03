import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/App/App';
import Favicon from 'react-favicon';

ReactDOM.render(
  <BrowserRouter>
    <Favicon url="../public/favicon.ico"/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
