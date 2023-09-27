import React, { useState, useEffect } from 'react';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import '../css/deltahubbackoffice.css';

function DeltaHubBackOffice() {
  return (
    <div className='containerPrincipal'>
      <div className='positionNavLateral'>
        <NavLateral />
      </div>
      <div className='positionNavSuperior'>
        <NavSuperior />
      </div>
      <div className='contentContainerBODH'>
        <div className='containerBODH' id='categorias'>
            <div className='headerBODH'>
                <h1>Categorias</h1>
                <div className='buttonBODH'><span className='textButtonBODH' style={{color: 'white'}}>Criar nova categoria</span></div>
                <div className='relativeContainerBODH'>
                    <ul>
                        <li><div className='cardBODH'></div></li>
                        <li><div className='cardBODH'></div></li>
                        <li><div className='cardBODH'></div></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='containerBODH' style={{ backgroundColor: 'blue' }}>
            <h1>Parceiros</h1>
        </div>
        <div className='containerBODH' style={{ backgroundColor: 'yellow' }}>
            <h1>Produtos</h1>
          <div className='relativeContainer'>
            <div className='cardBODH'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DeltaHubBackOffice };