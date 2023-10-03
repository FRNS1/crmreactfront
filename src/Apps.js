import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Routes from './routes/index'
import './css/tela_login.css';
import './style/global.css'
import Cookies from 'js-cookie';


const App = () => {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;