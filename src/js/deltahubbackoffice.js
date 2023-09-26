import React, { useState, useEffect } from 'react';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';

function DeltaHubBackOffice(){
    return(
        <div className='containerPrincipal'>
            <div className='positionNavLateral'>
                <NavLateral />
            </div>
            <div className='positionNavSuperior'>
                <NavSuperior />
            </div>
        </div>
    )
}

export { DeltaHubBackOffice };