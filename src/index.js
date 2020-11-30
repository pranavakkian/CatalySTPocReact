/* eslint-disable react/jsx-filename-extension */
/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login/index';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
