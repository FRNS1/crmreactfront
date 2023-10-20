import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';

import { NavSuperiorContainer, NavSuperiorContent } from './style'

export default function Navsuperior(){
  return(
    <NavSuperiorContainer>
      <NavSuperiorContent>
        <ul>
          <li>
            <h2> {Cookies.get('nome')} </h2>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </li>
        </ul>
      </NavSuperiorContent>
    </NavSuperiorContainer>
  )
}