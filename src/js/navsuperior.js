import React from 'react';
import '../css/upbar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavSuperior() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li className='username'>
            <text className='usernameText'>João Fernandes</text>
            <FontAwesomeIcon icon={faBars} />
          </li>
          
        </ul>
      </div>
    );
  }

export { NavSuperior };