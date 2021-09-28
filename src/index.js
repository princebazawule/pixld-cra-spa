import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <Router>
      <App />
    </Router>,
    rootElement
  );
} else {
  render(
    <Router>
      <App />
    </Router>,
    rootElement
  );
}
