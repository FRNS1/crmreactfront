import React from 'react';
import '../css/upbar.css';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';

function NavSuperior() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li className='username'>
            <span className='usernameText'> {Cookies.get('nome')} </span>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </li>
        </ul>
      </div>
    );
  }

export { NavSuperior };