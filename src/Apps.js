import './css/tela_login.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ButtonPage } from './js/login'
import { Checklist } from './js/checklist'
import { PedroRiccoPf } from './js/links-indicador/pf/pedroricco'
import { Telapessoas } from './js/pessoas';
import { Cadastrocli } from './js/cadastrocli';
import { Visucli } from './js/visucli';
import { VisualizacaoPropostas } from './js/visualizacaopropostas';
import { CadastroPropostas } from './js/cadastropropostas';
import { VisualizacaoIndividual } from './js/visualizacaoindividual';
import { RegistroPagamentos } from './js/registropagamentos';
import { RegistroPagamentoIndividual } from './js/registropagamentoindividual';
import { ChecklistPj } from './js/checklistpj';
import Cookies from 'js-cookie';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/pessoas" element={<Telapessoas />} />
        <Route path="/cadastrocli" element={<Cadastrocli />} />
        <Route path="/visucli" element={<Visucli />} />
        <Route path='/visualizacaopropostas' element={<VisualizacaoPropostas />} />
        <Route path='/cadastropropostas' element={<CadastroPropostas />} />
        <Route path='/visualizacaoindividual' element={<VisualizacaoIndividual />} />
        <Route path='/registropagamentos' element={<RegistroPagamentos />} />
        <Route path='/registropagamentoindividual' element={<RegistroPagamentoIndividual />} />
        <Route path='/checklistpf' element={<Checklist />} />
        <Route path='/checklistpj' element={<ChecklistPj />} />
        <Route path='/indicadorpedroricco' element={<PedroRiccoPf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;