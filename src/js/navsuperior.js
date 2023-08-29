import React from 'react';
import '../css/upbar.css';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavSuperior() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li className='username'>
            <text className='usernameText'>João Fernandes</text>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </li>
        </ul>
      </div>
    );
  }

export { NavSuperior };