import React from 'react';
import { Routes, Route } from "react-router-dom";

import { ButtonPage } from '../js/login'
import { Checklist } from '../pages/checklist/PF'
import { PedroRiccoPf } from '../js/links-indicador/pf/pedroricco'
import { Telapessoas } from '../js/pessoas';
import { Cadastrocli } from '../js/cadastrocli';
import { Visucli } from '../js/visucli';
import { VisualizacaoPropostas } from '../js/visualizacaopropostas';
import { CadastroPropostas } from '../js/cadastropropostas';
import { VisualizacaoIndividual } from '../js/visualizacaoindividual';
import { RegistroPagamentos } from '../js/registropagamentos';
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
import { RicardoBetoPf } from '../js/links-indicador/pf/ricardobeto';
import { RicardoBetoPj } from '../js/links-indicador/pj/ricardobetopj';
import { DeltaHubBackOffice } from '../js/deltahubbackoffice';
import { RedefinicaoSenha } from '../js/redefinicao_senha';

function MainRouter() {
  return(
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
        <Route path='/indicadorricardobetopf' element={<RicardoBetoPf />} />
        <Route path='/indicadorricardobetopj' element={<RicardoBetoPj />} />
        <Route path='/deltahubbackoffice' element={<DeltaHubBackOffice />} />
        <Route path='/redefinicao_senha' element={<RedefinicaoSenha />} />
    </Routes>
  );
}

export default MainRouter;