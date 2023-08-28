import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/tela_login.css';
import App from './Apps';
import './css/sidebar.css';
import NavLateral from './js/navlateral';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavLateral />
  </React.StrictMode>
);

