import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

ReactDOM.createPortal(
  <App />,
  document.getElementById('modal')
);
