import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/styles/tailwind.output.css';
import { BrowserRouter } from 'react-router-dom';

// This is where I would potentally add all of my USErProvider and createClient

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
