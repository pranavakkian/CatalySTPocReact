/* eslint-disable react/jsx-filename-extension */
/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import Routes from './Components/Routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
