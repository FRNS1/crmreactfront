import React from 'react';
import '../css/sidebar.css';

//dashboard
//pessoas
//propostas

function NavLateral() {
  return (
    <div className="sidebar">
      <img className="deltalogoazul" src={require('../imgs/deltalogoazul.png')} />
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Pessoas</li>
        <li>Propostas</li>
      </ul>
    </div>
  );
};
    
    export {NavLateral};