/* eslint-disable react/jsx-filename-extension */
/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import Login from './Components/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
