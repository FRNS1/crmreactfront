import React from 'react';
import {Route, Switch, HashRouter, withRouter, BrowserRouter, Routes} from 'react-router-dom';

import './css/tela_login.css';
import {App} from './Apps';
import './css/sidebar.css';
import {Navlateral} from './js/navlateral';


function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/app' component = {<App />} />
                <Route path='/navlateral' component = {<Navlateral />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Rotas