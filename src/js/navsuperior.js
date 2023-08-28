import React from 'react';
import '../css/upbar.css'

function NavSuperior() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </div>
    );
  }

export { NavSuperior };