import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import isAuthenticated from '../utils/auth'

//rotas
import { ButtonPage } from '../js/login'
import { Checklist } from '../pages/checklist/PF/index'
import { PedroRiccoPf } from '../js/links-indicador/pf/pedroricco'
// import { Telapessoas } from '../js/pessoas';
import Telapessoas  from '../pages/pessoas';
import { Cadastrocli } from '../js/cadastrocli';
import { Visucli } from '../js/visucli';
// import { VisualizacaoPropostas } from '../js/visualizacaopropostas';
import VisualizacaoPropostas from '../pages/visualizacaopropostas';
import { CadastroPropostas } from '../js/cadastropropostas';
// import { VisualizacaoIndividual } from '../js/visualizacaoindividual';
import VisualizacaoIndividual from '../pages/visualizacaoindividual';
import RegistroPagamentos  from '../pages/registroPagamento';
// import { RegistroPagamentos }  from '../js/registropagamentos';
import { RegistroPagamentoIndividual } from '../js/registropagamentoindividual';
import { ChecklistPj } from '../pages/checklist/PJ';
import { PedroRiccoPj } from '../js/links-indicador/pj/pedroriccopj';
import { MarceloPorfirioPf } from '../js/links-indicador/pf/marceloporfirio';
import { MarceloPorfirioPj } from '../js/links-indicador/pj/marceloporfiriopj';
import { IlgnerRochaPf } from '../js/links-indicador/pf/ilgnerrocha';
import { IlgnerRochaPj } from '../js/links-indicador/pj/ilgnerrochapj';
import { VanessaDonnianniPf } from '../js/links-indicador/pf/vanessadonnianni';
import { VanessaDonnianniPj } from '../js/links-indicador/pj/vanessadonniannipj';
import { HumbertoCardosoPf } from '../js/links-indicador/pf/humbertocardoso';
import { HumbertoCardosoPj } from '../js/links-indicador/pj/humbertocardosopj';
import { NilsonBentoPf } from '../js/links-indicador/pf/nilsonbento';
import { NilsonBentoPj } from '../js/links-indicador/pj/nilsonbentopj';
import { DeltaHubPf } from '../js/links-indicador/pf/deltahub'
import { DeltaHubPj } from '../js/links-indicador/pj/deltahubpj'
import { DeltaHubBackOffice } from '../js/deltahubbackoffice';
import { EsqueceuSenha } from '../js/esqueceusenha';
import { NovaSenha } from '../js/novasenha';
import Dashboard  from '../pages/Dashboard'
import Cadastrodeltainvestor from '../pages/Cadastrodeltainvestor'

//privando rotas para o usuario 
const PrivateRoute = ({ children }) => {
  const isUserAuthenticated = isAuthenticated();
  return isUserAuthenticated ? children : <Navigate to="/" />;
};

function MainRouter() {

  return(
    <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/cadastrodeltainvestor" element={<Cadastrodeltainvestor />} />
        <Route path="/cadastrocli" element={<Cadastrocli />} />
        <Route path='/checklistpf' element={<Checklist />} />
        <Route path='/checklistpj' element={<ChecklistPj />} />
        <Route path='/indicadorpedroriccopf' element={<PedroRiccoPf />} />
        <Route path='/indicadorpedroriccopj' element={<PedroRiccoPj />} />
        <Route path='/indicadormarceloporfiriopf' element={<MarceloPorfirioPf />} />
        <Route path='/indicadormarceloporfiriopj' element={<MarceloPorfirioPj />} />
        <Route path='/indicadorilgnerpf' element={<IlgnerRochaPf />} />
        <Route path='/indicadorilgnerpj' element={<IlgnerRochaPj />} />
        <Route path='/indicadorvanessadonniannipf' element={<VanessaDonnianniPf />} />
        <Route path='/indicadorvanessadonniannipj' element={<VanessaDonnianniPj />} />
        <Route path='/indicadorhumbertocardosopf' element={<HumbertoCardosoPf />} />
        <Route path='/indicadorhumbertocardosopj' element={<HumbertoCardosoPj />} />
        <Route path='/indicadornilsonbentopf' element={<NilsonBentoPf />} />
        <Route path='/indicadornilsonbentopj' element={<NilsonBentoPj />} />
        <Route path='/indicadordeltahubpf' element={<DeltaHubPf />} />
        <Route path='/indicadordeltahubpj' element={<DeltaHubPj />} />
        <Route path='/esqueceusenha' element={<EsqueceuSenha />} />
        <Route path='/novasenha' element={<NovaSenha />} />

        {/* rotas privadas */}

        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route 
          path="/pessoas" 
          element={
            <PrivateRoute>
              <Telapessoas />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/visucli" 
          element={
            <PrivateRoute>
              <Visucli />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/visualizacaopropostas' 
          element={
            <PrivateRoute>
              <VisualizacaoPropostas />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/cadastropropostas' 
          element={
            <PrivateRoute>
              <CadastroPropostas />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/visualizacaoindividual' 
          element={
            <PrivateRoute>
              <VisualizacaoIndividual />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/registropagamentos' 
          element={
            <PrivateRoute>
              <RegistroPagamentos />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/registropagamentoindividual' 
          element={
            <PrivateRoute>
              <RegistroPagamentoIndividual />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/deltahubbackoffice' 
          element={
            <PrivateRoute>
              <DeltaHubBackOffice />
            </PrivateRoute>
          } 
        />
    </Routes>
  );
}

export default MainRouter;