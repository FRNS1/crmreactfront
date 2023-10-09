import React, { useEffect, useState, useRef } from 'react';
import '../css/visualizacao_individual.css';
import { NavSuperior } from './navsuperior';
import { NavLateral } from './navlateral';
import { format } from 'date-fns';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2'
import { filesize } from 'filesize';

import Loading from '../components/UI/Loading';
import UploadContainer from '../components/UploadContainer';
import InfPessoais from '../components/informacoespessoais'

function VisualizacaoIndividual() {
    const [muda, handleButtonClick] = useState('infPropostas');
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [data, setData] = useState();
    const [analytics, setAnalytics] = useState(false);
    const [allsData, setAllsData] = useState(false);
    const [scr, setScr] = useState(false);
    const [files, setFiles] = useState([]);
    // Variaveis prop2osal
    const [proposalId, setProposalId] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerRazaoSocial, setCustomerRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [valorDesejado, setValorDesejado] = useState('');
    const [taxa, setTaxa] = useState('');
    const [corban, setCorban] = useState('');
    const [status, setStatus] = useState('');
    const [montante, setMontante] = useState('');
    const [valorLiberado, setValorLiberado] = useState('');
    const [prazo, setPrazo] = useState('');
    const [dataAbertura, setDataAbertura] = useState('');
    const [dataPrimeiraParcela, setDataPrimeiraParcela] = useState('');
    const [totalJuros, setTotalJuros] = useState('');
    const [statusContrato, setStatusContrato] = useState('');
    const [motivoReprovacao, setMotivoReprovacao] = useState('');
    const [observacaoCliente, setObservacaoCliente] = useState('');
    const [observacaoAnalista, setObservacaoAnalista] = useState('');
    // Variáveis Analytics
    const [numTitulosProtestados, setNumTitulosProtestados] = useState('');
    const [score, setScore] = useState('');
    const [numRefins, setNumRefins] = useState('');
    const [valorCadins, setValorCadins] = useState('');
    const [valorIss, setValorIss] = useState('');
    const [numProcessos, setNumProcessos] = useState('');
    const [valorProcessos, setValorProcessos] = useState('');
    const [numUfProcessos, setNumUfProcessos] = useState('');
    const [dividaAtiva, setDividaAtiva] = useState('');
    const [valorTitulosProtestados, setValorTitulosProtestados] = useState('');
    const [risco, setRisco] = useState('');
    const [pep, setPep] = useState('');
    const [numChequesDevolvidos, setNumChequesDevolvidos] = useState('');
    const [valorChequesDevolvidos, setValorChequesDevolvidos] = useState('');
    const [valorPefins, setValorPefins] = useState('');
    const [numPefins, setNumPefins] = useState('');
    const [empresasNaoInformadas, setEmpresasNaoInformadas] = useState('');
    // Variáveis SCR
    const [vencerValorTotal, setVencerValorTotal] = useState('');
    const [vencerAte30DiasvencidosAte14Dias, setVencerAte30DiasVencidosAte14Dias] = useState('');
    const [vencer3160Dias, setVencer3160Dias] = useState('');
    const [vencer6190Dias, setVencer6190Dias] = useState('');
    const [vencer91180Dias, setVencer91180Dias] = useState('');
    const [vencer181360Dias, setVencer181360Dias] = useState('');
    const [vencerAcima360Dias, setVencerAcima360Dias] = useState('');
    const [vencerIndeterminado, setVencerIndeterminado] = useState('');
    const [vencidoTotal, setVencidoTotal] = useState('');
    const [vencido1530Dias, setVencido1530Dias] = useState('');
    const [vencido3160Dias, setVencido3160Dias] = useState('');
    const [vencido6190Dias, setVencido6190Dias] = useState('');
    const [vencido91180Dias, setVencido91180Dias] = useState('');
    const [vencido181360Dias, setVencido181360Dias] = useState('');
    const [vencidoAcima360Dias, setVencidoAcima360Dias] = useState('');
    const [prejuizoTotal, setPrejuizoTotal] = useState('');
    const [prejuizoAte12Meses, setPrejuizoAte12Meses] = useState('');
    const [prejuizoAcima12Meses, setPrejuizoAcima12Meses] = useState('');
    const [coobrigacaoTotal, setCoobrigacaoTotal] = useState('');
    const [coobrigacaoAssumida, setCoobrigacaoAssumida] = useState('');
    const [coobrigacaoPrestadas, setCoobrigacaoPrestadas] = useState('');
    const [creditosLiberarTotal, setCreditosLiberarTotal] = useState('');
    const [creditosLiberarAte360Dias, setCreditosLiberarAte360Dias] = useState('');
    const [creditosLiberarAcima360Dias, setCreditosLiberarAcima360Dias] = useState('');
    const [limitesCreditoValorTotal, setLimitesCreditoValorTotal] = useState('');
    const [limitesCreditoVencimentoAte360Dias, setLimitesCreditosVencimentoAte360Dias] = useState('');
    const [limitesCreditoVencimentoAcima360Dias, setLimitesCreditosVencimentoAcima360Dias] = useState('');
    // Variáveis AllsData
    const [numPendenciasFinanceirasAlls, setNumPendenciasFinanceirasAlls] = useState('');
    const [valorPendenciasFinanceirasAlls, setValorPendenciasFinanceirasAlls] = useState('');
    const [numRecuperacoesAlls, setNumRecuperacoesAlls] = useState('');
    const [valorRecuperacoesAlls, setValorRecuperacoesAlls] = useState('');
    const [numChequeSemFundoAlls, setNumChequeSemFundoAlls] = useState('');
    const [numProtestosAlls, setNumProtestosAlls] = useState('');
    const [valorProtestosAlls, setValorProtestosAlls] = useState('');
    const [limiteSugeridoAlls, setLimiteSugeridoAlls] = useState('');
    const [numRestricoesAlls, setNumRestricoesAlls] = useState('');
    const [valorRestricoesAlls, setValorRestricoesAlls] = useState('');
    // Variáveis Files
    const [filesReceived, setFilesReceived] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const Mudapagina = (value) => {
        handleButtonClick(value);
    };

    async function getDataProposal() {
        const token = Cookies.get('token');
        const url = `http://35.175.231.117:8080/api/v1/proposal/getbyid/${Cookies.get('propostaSelecionada')}`;
        try {
            const response = await axios.get(
                url,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            const data = response.data;
            setData(data);
            setProposalId(data.proposalId);
            setCustomerName(data.customerName);
            setCustomerRazaoSocial(data.customerRazaoSocial);
            setCnpj(data.cnpj);
            setCpf(data.cpf);
            setValorDesejado(data.valorDesejado);
            setTaxa(data.taxa);
            setCorban(data.corban);
            setStatus(data.status);
            setMontante(data.montante);
            setValorLiberado(data.valorLiberado);
            setPrazo(data.prazo);
            setDataAbertura(data.dataAbertura);
            setDataPrimeiraParcela(data.dataPrimeiraParcela);
            setTotalJuros(data.totalJuros);
            setStatusContrato(data.statusContrato);
            setMotivoReprovacao(data.motivoReprovacao);
            setObservacaoCliente(data.observacaoCliente);
            setObservacaoAnalista(data.observacaoAnalista);
            setNumTitulosProtestados(data.analytics.num_titulos_protestados);
            setScore(data.analytics.score);
            setNumRefins(data.analytics.num_refins);
            setValorCadins(data.analytics.valor_cadins);
            setValorIss(data.analytics.valor_iss);
            setNumProcessos(data.analytics.num_processos);
            setValorProcessos(data.analytics.valor_processos);
            setNumUfProcessos(data.analytics.num_uf_processos);
            setDividaAtiva(data.analytics.divida_ativa);
            setValorTitulosProtestados(data.analytics.valor_titulos_protestados);
            setRisco(data.analytics.risco);
            setPep(data.analytics.pep);
            setNumChequesDevolvidos(data.analytics.num_cheques_devolvidos);
            setValorChequesDevolvidos(data.analytics.valor_cheques_devolvidos);
            setValorPefins(data.analytics.valor_pefins);
            setNumPefins(data.analytics.num_pefins);
            setEmpresasNaoInformadas(data.analytics.empresas_nao_informadas);
            setVencerValorTotal(data.scr.vencer_valor_total);
            setVencerAte30DiasVencidosAte14Dias(data.scr.vencer_ate_30_dias_vencidos_ate_14_dias);
            setVencer3160Dias(data.scr.vencer_31_60_dias);
            setVencer6190Dias(data.scr.vencer_61_90_dias);
            setVencer91180Dias(data.scr.vencer_91_180_dias);
            setVencer181360Dias(data.scr.vencer_181_360_dias);
            setVencerAcima360Dias(data.scr.vencer_acima_360_dias);
            setVencerIndeterminado(data.scr.vencer_indeterminado);
            setVencidoTotal(data.scr.vencido_total);
            setVencido1530Dias(data.scr.vencido_15_30_dias);
            setVencido3160Dias(data.scr.vencido_31_60_dias);
            setVencido6190Dias(data.scr.vencido_61_90_dias);
            setVencido91180Dias(data.scr.vencido_91_180_dias);
            setVencido181360Dias(data.scr.vencido_181_360_dias);
            setVencidoAcima360Dias(data.scr.vencido_acima_360_dias);
            setPrejuizoTotal(data.scr.prejuizo_total);
            setPrejuizoAte12Meses(data.scr.prejuizo_ate_12_meses);
            setPrejuizoAcima12Meses(data.scr.prejuizo_acima_12_meses);
            setCoobrigacaoTotal(data.scr.coobrigacao_total);
            setCoobrigacaoAssumida(data.scr.coobrigacao_assumida);
            setCoobrigacaoPrestadas(data.scr.coobrigacao_prestadas);
            setCreditosLiberarTotal(data.scr.creditos_liberar_total);
            setCreditosLiberarAte360Dias(data.scr.creditos_liberar_ate_360_dias);
            setCreditosLiberarAcima360Dias(data.scr.creditos_liberar_acima_360_dias);
            setLimitesCreditoValorTotal(data.scr.limites_credito_valor_total);
            setLimitesCreditosVencimentoAte360Dias(data.scr.limites_credito_vencimento_ate_360_dias);
            setLimitesCreditosVencimentoAcima360Dias(data.scr.limites_credito_vencimento_acima_360_dias);
            setNumPendenciasFinanceirasAlls(data.allsData.num_pendencias_financeiras_alls);
            setValorPendenciasFinanceirasAlls(data.allsData.valor_pendencias_financeiras_alls);
            setNumRecuperacoesAlls(data.allsData.num_recuperacoes_alls);
            setValorRecuperacoesAlls(data.allsData.valor_recuperacoes_alls);
            setNumChequeSemFundoAlls(data.allsData.num_cheque_sem_fundo_alls);
            setNumProtestosAlls(data.allsData.num_protestos_alls);
            setValorProtestosAlls(data.allsData.valor_protestos_alls);
            setLimiteSugeridoAlls(data.allsData.limite_sugerido_alls);
            setNumRestricoesAlls(data.allsData.num_restricoes_alls);
            setValorRestricoesAlls(data.allsData.valor_restricoes);
            setFilesReceived(data.files);
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    }


    async function sendInfos() {
        const token = Cookies.get('token');
        const urlUpdateInfos = 'http://35.175.231.117:8080/api/v1/proposal/update';

        const proposalUpdateDTO = {
            proposal_id: Cookies.get('propostaSelecionada'),
            user_id: Cookies.get('userid'),
            valor_desejado: valorDesejado,
            taxa: taxa.toString().replace(",", "."),
            corban: corban.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            status: status,
            montante: montante.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            valor_liberado: valorLiberado.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            prazo: prazo,
            data_abertura: dataAbertura,
            data_primeira_parcela: dataPrimeiraParcela,
            total_juros: totalJuros.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            status_contrato: statusContrato,
            motivo_reprovacao: motivoReprovacao,
            observacao_cliente: observacaoCliente,
            observacao_analista: observacaoAnalista
        };
        try {
            setIsLoading(true);
            const responseUpdateInfos = await axios.post(urlUpdateInfos, proposalUpdateDTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Dados enviados com sucesso:', responseUpdateInfos.data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Dados enviados com sucesso!',
                showConfirmButton: false,
                timer: 1500
            })
            
        } catch (erro) {
            console.error('Erro ao enviar os dados:', erro)
        }
        finally {
            setIsLoading(false); // Defina isLoading como false aqui
        }
    }

    async function sendBureausCredito() {
        const token = Cookies.get('token');
        const urlUpdateAnalytics = 'http://35.175.231.117:8080/api/v1/analytics/update';

        const analyticsUpdateDTO = {
            proposalId: Cookies.get('propostaSelecionada'),
            user_id: Cookies.get('userid'),
            numTitulosProtestados: numTitulosProtestados,
            score: score,
            numRefins: numRefins,
            valorCadins: valorCadins.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            valorIss: valorIss.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            numProcessos: numProcessos,
            valorProcessos: valorProcessos.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            numUfProcessos: numUfProcessos,
            dividaAtiva: dividaAtiva.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            valorTitulosProtestados: valorTitulosProtestados.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            risco: risco,
            pep: pep,
            numChequesDevolvidos: numChequesDevolvidos,
            valorChequesDevolvidos: valorChequesDevolvidos.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            valorPefins: valorPefins.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            numPefins: numPefins,
            empresasNaoInformadas: empresasNaoInformadas
        };

        try {
            setIsLoading(true);
            const responseUpdateAnalytics = await axios.post(urlUpdateAnalytics, analyticsUpdateDTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Dados enviados com sucesso:', responseUpdateAnalytics.data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Dados atualizados com sucesso!',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (erro) {
            console.error('Erro ao enviar os dados:', erro);
        }
        finally {
            setIsLoading(false); // Defina isLoading como false aqui
        }
    }

    async function sendBacen() {
        const token = Cookies.get('token');
        const urlUpdateScr = 'http://35.175.231.117:8080/api/v1/scr/update';

        const ScrUpdateDTO = {
            proposal_id: Cookies.get('propostaSelecionada'),
            vencer_valor_total: vencerValorTotal.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencer_ate_30_dias_vencidos_ate_14_dias: vencerAte30DiasvencidosAte14Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencer_31_60_dias: vencer3160Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencer_61_90_dias: vencer6190Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencer_91_180_dias: vencer91180Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencer_181_360_dias: vencer181360Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencer_acima_360_dias: vencerAcima360Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencer_indeterminado: vencerIndeterminado.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencido_total: vencidoTotal.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencido_15_30_dias: vencido1530Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencido_31_60_dias: vencido3160Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencido_61_90_dias: vencido6190Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencido_91_180_dias: vencido91180Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencido_181_360_dias: vencido181360Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            vencido_acima_360_dias: vencidoAcima360Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            prejuizo_total: prejuizoTotal.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            prejuizo_ate_12_meses: prejuizoAte12Meses.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            prejuizo_acima_12_meses: prejuizoAcima12Meses.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            coobrigacao_total: coobrigacaoTotal.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            coobrigacao_assumida: coobrigacaoAssumida.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            coobrigacao_prestadas: coobrigacaoPrestadas.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            creditos_liberar_total: creditosLiberarTotal.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            creditos_liberar_ate_360_dias: creditosLiberarAte360Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            creditos_liberar_acima_360_dias: creditosLiberarAcima360Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            limites_credito_valor_total: limitesCreditoValorTotal.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            limites_credito_vencimento_ate_360_dias: limitesCreditoVencimentoAte360Dias.toString().replace("R$ ", "").replace(".", "").replace(",", "."),
            limites_credito_vencimento_acima_360_dias: limitesCreditoVencimentoAcima360Dias.toString().replace("R$ ", "").replace(".", "").replace(",", ".")
        };

        try {
            setIsLoading(true);
            const responseUpdateScr = await axios.post(urlUpdateScr, ScrUpdateDTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Dados enviados com sucesso:', responseUpdateScr.data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Dados atualizados com sucesso!',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (erro) {
            console.error('Erro ao enviar os dados:', erro);
        }
        finally {
            setIsLoading(false); // Defina isLoading como false aqui
        }

    }

    async function sendAllsData() {
        const token = Cookies.get('token');
        const urlUpdateAllsData = 'http://35.175.231.117:8080/api/v1/allsdata/update';

        let valor_pendencias_financeiras = 0;
        try {
            valor_pendencias_financeiras = valorPendenciasFinanceirasAlls.toString().replace("R$ ", "").replace(".", "").replace(",", ".")
        } catch (erro) {
            valor_pendencias_financeiras = valorPendenciasFinanceirasAlls
        };

        let valor_recuperacoes = 0;
        try {
            valor_recuperacoes = valorRecuperacoesAlls.toString().replace("R$ ", "").replace(".", "").replace(",", ".")
        } catch (erro) {
            valor_recuperacoes = valorRecuperacoesAlls
        };

        let valor_protestos = 0;
        try {
            valor_protestos = valorProtestosAlls.toString().replace("R$ ", "").replace(".", "").replace(",", ".")
        } catch (erro) {
            valor_protestos = valorProtestosAlls
        };

        let limite_sugerido = 0;
        try {
            limite_sugerido = limiteSugeridoAlls.toString().replace("R$ ", "").replace(".", "").replace(",", ".")
        } catch (erro) {
            limite_sugerido = limiteSugeridoAlls
        };

        let valor_restricoes = 0;
        try {
            valor_restricoes = valorRestricoesAlls.toString().replace("R$ ", "").replace(".", "").replace(",", ".")
        } catch (erro) {
            valor_restricoes = valorRestricoesAlls
        };

        const AllsDataUpdateDTO = {
            proposal_id: Cookies.get('propostaSelecionada'),
            user_id: Cookies.get('userid'),
            num_pendencias_financeiras: numPendenciasFinanceirasAlls,
            valor_pendencias_financeiras: valor_pendencias_financeiras,
            num_recuperacoes: numRecuperacoesAlls,
            valor_recuperacoes: valor_recuperacoes,
            num_cheque_sem_fundo: numChequeSemFundoAlls,
            num_protestos: numProtestosAlls,
            valor_protestos: valor_protestos,
            limite_sugerido: limite_sugerido,
            num_restricoes: numRestricoesAlls,
            valor_restricoes: valor_restricoes,
        };

        try {
            setIsLoading(true);
            const responseUpdateAllsData = await axios.post(urlUpdateAllsData, AllsDataUpdateDTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Dados enviados com sucesso:', responseUpdateAllsData.data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Dados atualizados com sucesso!',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (erro) {
            console.error('Erro ao enviar os dados:', erro);
        }
        finally {
            setIsLoading(false); // Defina isLoading como false aqui
        }
    }

    async function sendFiles() {
        console.log("Enviando");
        console.log(files);
    

        for (let i = 0; i < files.length; i++) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${Cookies.get('token')}`);
    

            var formdata = new FormData();
            formdata.append("file", files[i]);
    

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
    

            // Upload do arquivo
            await fetch("http://35.175.231.117:8080/api/v1/files/upload", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log("Arquivo enviado:", result)
                })
                .catch(error => console.log('error', error));
    

            // Construir o link S3
            var myHeaders2 = new Headers();
            myHeaders2.append("Authorization", `Bearer ${Cookies.get('token')}`);
            myHeaders2.append("Content-Type", "application/json");
    

            let fileName = files[i].name.replace(/\s/g, "+");
            let link = `https://docsbora.s3.amazonaws.com/${fileName}`;

            var data = {
                user_id: Cookies.get('userid'),
                fileName: fileName,
                tipoArquivo: "Documentos do cliente",
                proposal: Cookies.get('propostaSelecionada'),
                url: link
            };
    

            var requestOptionsData = {
                method: 'POST',
                headers: myHeaders2,
                body: JSON.stringify(data),
                redirect: 'follow'
            };
    

            // Enviar informações sobre o arquivo
            await fetch("http://35.175.231.117:8080/api/v1/files/filesdata", requestOptionsData)
                .then(response => response.text())
                .then(result => {alert("Informações e arquivo enviados"); setFiles([]); getDataProposal();})
                .then(result => { alert("Informações e arquivo enviados"); setFiles([]); getDataProposal(); })
                .catch(error => console.log('error', error));
        }
    }

    

    useEffect(() => {
        getDataProposal();
    }, []);

    <InfPessoais/>

    function InfPropostas() {
        const handleTotalJurosChange = (value) => {
            setTotalJuros(value);
        };
        const handleMontanteChange = (value) => {
            setMontante(value);
        };
        const handleValorLiberadoChange = (value) => {
            setValorLiberado(value);
        };
        const handleStatusChange = (event) => {
            setStatus(event.target.value);
        };
        const HandleStatusContratoChange = (event) => {
            setStatusContrato(event.target.value);
        };
        const HandleMotivoReprovacaoChange = (event) => {
            setMotivoReprovacao(event.target.value);
        };
        const handleTaxaChange = (value) => {
            setTaxa(value);
        };
        const handleCorbanChange = (value) => {
            setCorban(value);
        };
        const handlePrazoChange = (value) => {
            setPrazo(value);
        };
        const handleObservacaoClienteChange = (value) => {
            setObservacaoCliente(value);
        };
        const handleObservacaoAnalistaChange = (value) => {
            setObservacaoAnalista(value);
        };

        return (
            <div className='infopropostas'>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor Desejado </label>
                                <CurrencyInput
                                    name="totalValorDesejado"
                                    value={valorDesejado}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                    disabled
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Taxa </label>
                                <input
                                    name="taxa"
                                    placeholder={taxa}
                                    onBlur={(event) => handleTaxaChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Corban </label>
                                <CurrencyInput
                                    name="taxa"
                                    placeholder={`R$ ${corban}`}
                                    onBlur={(event) => handleCorbanChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Status </label>
                                <select className='inputCad' value={status} onChange={handleStatusChange}>
                                    <option className='inputCad' value='EM ANALISE'> EM ANALISE </option>
                                    <option className='inputCad' value='APROVADO'> APROVADO </option>
                                    <option className='inputCad' value='REPROVADO'> REPROVADO </option>
                                    <option className='inputCad' value='EMPRESTIMO CONCEDIDO'> EMPRESTIMO CONCEDIDO </option>
                                    <option className='inputCad' value='PENDENCIA DE DOCUMENTACAO'> PENDENCIA DE DOCUMENTACAO </option>   
                                </select>
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Montante </label>
                                <CurrencyInput
                                    name="montante"
                                    placeholder={`R$ ${montante}`}
                                    onBlur={(event) => handleMontanteChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Valor Liberado </label>
                                <CurrencyInput
                                    name="valorliberado"
                                    placeholder={`R$ ${valorLiberado}`}
                                    onBlur={(event) => handleValorLiberadoChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Prazo </label>
                                <input
                                    name="prazo"
                                    placeholder={prazo}
                                    onBlur={(event) => handlePrazoChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Data de Abertura </label>
                                <InputMask
                                    mask="99/99/9999"
                                    placeholder="DD/MM/AAAA"
                                    type="text"
                                    className="inputCad"
                                    value={dataAbertura ? format(new Date(dataAbertura), 'dd/MM/yyyy') : ''}
                                    disabled
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Data da Primeira Parcela </label>
                                <InputMask
                                    mask="99/99/9999"
                                    placeholder="DD/MM/AAAA"
                                    type="text"
                                    className="inputCad"
                                    value={dataPrimeiraParcela ? format(new Date(dataPrimeiraParcela), 'dd/MM/yyyy') : ''}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Total de Juros </label>
                                <CurrencyInput
                                    name="totalJuros"
                                    placeholder={`R$ ${totalJuros}`}
                                    onBlur={(event) => handleTotalJurosChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Status do Contrato </label>
                                <select className='inputCad' value={statusContrato} onChange={HandleStatusContratoChange}>
                                    <option className='inputCad'> Aberto </option>
                                    <option className='inputCad'> Quitado </option>
                                </select>
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Motivo da reprovação </label>
                                <select className='inputCad' value={motivoReprovacao} onChange={HandleMotivoReprovacaoChange}>
                                    <option className='inputCad'> Selecione um motivo  </option>
                                    <option className='inputCad'> Restrição de bureaus de crédito  </option>
                                    <option className='inputCad'> Restrição por divida ativa </option>
                                    <option className='inputCad'> Restrição de cadin </option>
                                    <option className='inputCad'> Restrição por ausência de documento </option>
                                    <option className='inputCad'> Restrição por renda insuficiente </option>
                                    <option className='inputCad'> Restrição por score fora da política </option>
                                    <option className='inputCad'> Restrição por processo criminal ou civil </option>
                                    <option className='inputCad'> Empresas ligadas com restrição </option>
                                </select>
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Renda Média </label>
                                <CurrencyInput
                                    name="valorliberado"
                                    placeholder={`R$ ${valorLiberado}`}
                                    onBlur={(event) => handleValorLiberadoChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> CPF (Somente PF) </label>
                                <InputMask mask="999.999.999-99" className="inputCad" type="text" disabled />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Telefone (Somente PF) </label>
                                <InputMask mask="(99) 99999-9999" className="inputCad" type="text" disabled />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Nome do Sócio (Somente PJ) </label>
                                <input
                                    name="prazo"
                                    className="inputCad"
                                    disabled
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> CPF do Sócio (Somente PJ) </label>
                                <input
                                    name="prazo"
                                    className="inputCad"
                                    disabled
                                />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="text" disabled />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Observação do Cliente </label>
                                <textarea
                                    name="observacaoCliente"
                                    placeholder={observacaoCliente}
                                    onBlur={(event) => handleObservacaoClienteChange(event.target.value)}
                                    className="textAreaObsCliente"
                                    type="text"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Observação do Analista </label>
                                <textarea
                                    name="observacaoAnalista"
                                    placeholder={observacaoAnalista}
                                    onBlur={(event) => handleObservacaoAnalistaChange(event.target.value)}
                                    className="textAreaObsAnalista"
                                    type="text"
                                />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="text" disabled />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divbotaoEnviarObservacoes' onClick={sendInfos}>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
            {isLoading && <Loading/>}
            </div>
        );
    }

    function BearusCredito() {

        const handleScoreChange = (value) => {
            setScore(value);
        };
        const handleRiscoChange = (value) => {
            setRisco(value);
        };
        const handleQuantidadeTituloProtestadosChange = (value) => {
            setNumTitulosProtestados(value);
        };
        const handleValorCadinsChange = (value) => {
            setValorCadins(value);
        };
        const handleValorTitulosProtestadosChange = (value) => {
            setValorTitulosProtestados(value);
        };
        const handleQuantidadePefinsChange = (value) => {
            setNumPefins(value);
        };
        const handleValorPefinsChange = (value) => {
            setValorPefins(value);
        };
        const handleQuantidadeChequesDevolvidosChange = (value) => {
            setNumChequesDevolvidos(value);
        };
        const handleValorChequesDevolvidosChange = (value) => {
            setValorChequesDevolvidos(value);
        };
        const handleValorProcessosChange = (value) => {
            setValorProcessos(value);
        };
        const handleDividaAtivaChange = (value) => {
            setDividaAtiva(value);
        };
        const handleValorISSChange = (value) => {
            setValorIss(value);
        };
        const handleRefinsChange = (value) => {
            setNumRefins(value);
        };
        const handleEmpresasNaoInformadasChange = (value) => {
            setEmpresasNaoInformadas(value);
        };
        const handleQuantidadeProcessosChange = (value) => {
            setNumProcessos(value);
        }
        const handleNumUfProcessosChange = (value) => {
            setNumUfProcessos(value);
        }
        const [isChecked, setIsChecked] = useState(false);
        const handleCheckboxChange = () => {
            setIsChecked(!isChecked); // Inverte o estado da checkbox
        };


        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Score </label>
                                <input
                                    name="score"
                                    placeholder={score}
                                    onBlur={(event) => handleScoreChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Risco </label>
                                <input
                                    name="risco"
                                    placeholder={risco}
                                    onBlur={(event) => handleRiscoChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de titulos protestados </label>
                                <input
                                    name="numTitulosProtestados"
                                    placeholder={numTitulosProtestados}
                                    onBlur={(event) => handleQuantidadeTituloProtestadosChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor dos titulos protestados </label>
                                <CurrencyInput
                                    name="valortitulosprotestados"
                                    placeholder={`R$ ${valorTitulosProtestados}`}
                                    onBlur={(event) => handleValorTitulosProtestadosChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Refins </label>
                                <input
                                    name="numRefins"
                                    placeholder={numRefins}
                                    onBlur={(event) => handleRefinsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Cadins </label>
                                <CurrencyInput
                                    name="valorCadins"
                                    placeholder={`R$ ${valorCadins}`}
                                    onBlur={(event) => handleValorCadinsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de cheques devolvidos </label>
                                <input
                                    name="numChequesDevolvidos"
                                    placeholder={numChequesDevolvidos}
                                    onBlur={(event) => handleQuantidadeChequesDevolvidosChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Valor dos cheques devolvidos </label>
                                <CurrencyInput
                                    name="valorCadins"
                                    placeholder={`R$ ${valorChequesDevolvidos}`}
                                    onBlur={(event) => handleValorChequesDevolvidosChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de Pefin </label>
                                <input
                                    name="numPefins"
                                    placeholder={numPefins}
                                    onBlur={(event) => handleQuantidadePefinsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor de Pefin </label>
                                <CurrencyInput
                                    name="valorPefins"
                                    placeholder={`R$ ${valorPefins}`}
                                    onBlur={(event) => handleValorPefinsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Empresas não Informadas </label>
                                <input
                                    name="empresasNaoInformadas"
                                    placeholder={empresasNaoInformadas}
                                    onBlur={(event) => handleEmpresasNaoInformadasChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="text" disabled />
                            </div>
                        </div>
                        <br />
                        <br />
                        <text className='textJuridico'> Jurídico </text>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de processos </label>
                                <input
                                    name="numProcessos"
                                    placeholder={numProcessos}
                                    onBlur={(event) => handleQuantidadeProcessosChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Valor dos processos </label>
                                <CurrencyInput
                                    name="valorProcessos"
                                    placeholder={`R$ ${valorProcessos}`}
                                    onBlur={(event) => handleValorProcessosChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> UF Processos </label>
                                <input
                                    name="numUfProcessos"
                                    placeholder={numUfProcessos}
                                    onBlur={(event) => handleNumUfProcessosChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Divida Ativa </label>
                                <CurrencyInput
                                    name="dividaAtiva"
                                    placeholder={`R$ ${dividaAtiva}`}
                                    onBlur={(event) => handleDividaAtivaChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> PEP </label>
                                <div className='checkBox'>
                                    <label className='labelCheckBox'>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> ISS </label>
                                <CurrencyInput
                                    name="valorIss"
                                    placeholder={`R$ ${valorIss}`}
                                    onBlur={(event) => handleValorISSChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divbotaoEnviarObservacoes' onClick={sendBureausCredito}>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
                {isLoading && <Loading/>}
            </div>
        );
    }

    function Bacen() {
        const handleVencerValorTotalChange = (value) => {
            setVencerValorTotal(value);
        };
        const handleVencerAte30DiasvencidosAte14DiasTotalChange = (value) => {
            setVencerAte30DiasVencidosAte14Dias(value);
        };
        const handleVencer3160DiasChange = (value) => {
            setVencer3160Dias(value);
        };
        const handleVencer6190DiasChange = (value) => {
            setVencer6190Dias(value);
        };
        const handleVencer91180DiasChange = (value) => {
            setVencer91180Dias(value);
        };
        const handleVencer181360DiasChange = (value) => {
            setVencer181360Dias(value);
        };
        const handleVencerAcima360DiasChange = (value) => {
            setVencerAcima360Dias(value);
        };
        const handleVencerIndeterminadoChange = (value) => {
            setVencerIndeterminado(value);
        };
        const handleVencidoTotalChange = (value) => {
            setVencidoTotal(value);
        };
        const handleVencido1530DiasChange = (value) => {
            setVencido1530Dias(value);
        };
        const handleVencido3160DiasChange = (value) => {
            setVencido3160Dias(value);
        };
        const handleVencido6190DiasChange = (value) => {
            setVencido6190Dias(value);
        };
        const handleVencido91180DiasChange = (value) => {
            setVencido91180Dias(value);
        };
        const handleVencido181360DiasChange = (value) => {
            setVencido181360Dias(value);
        };
        const handleVencidoAcima360DiasChange = (value) => {
            setVencidoAcima360Dias(value);
        };
        const handlePrejuizoTotalChange = (value) => {
            setPrejuizoTotal(value);
        };
        const handlePrejuizoAte12MesesChange = (value) => {
            setPrejuizoAte12Meses(value);
        };
        const handlePrejuizoAcima12MesesChange = (value) => {
            setPrejuizoAcima12Meses(value);
        };
        const handleCoobrigacaoTotalChange = (value) => {
            setCoobrigacaoTotal(value);
        };
        const handleCoobrigacaoAssumidaChange = (value) => {
            setCoobrigacaoAssumida(value);
        };
        const handleCoobrigacaoPrestadasChange = (value) => {
            setCoobrigacaoPrestadas(value);
        };
        const handleCreditosLiberarTotalChange = (value) => {
            setCreditosLiberarTotal(value);
        };
        const handleCreditosLiberarAte360DiasChange = (value) => {
            setCreditosLiberarAte360Dias(value);
        };
        const handleCreditosLiberarAcima360DiasChange = (value) => {
            setCreditosLiberarAcima360Dias(value);
        };
        const handleLimitesCreditoValorTotalChange = (value) => {
            setLimitesCreditoValorTotal(value);
        };
        const handleLimitesCreditoVencimentoAte360DiasChange = (value) => {
            setLimitesCreditosVencimentoAte360Dias(value);
        };
        const handleLimitesCreditoVencimentoAcima360DiasChange = (value) => {
            setLimitesCreditosVencimentoAcima360Dias(value);
        };



        return (
            <div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Vencer - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencerValorTotal"
                                        placeholder={`R$ ${vencerValorTotal}`}
                                        onBlur={(event) => handleVencerValorTotalChange(event.target.value)}
                                        className="thinputColunasTabelaPropostasBacen"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Até 30 dias e vencidos até 14 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencerAte30DiasvencidosAte14Dias"
                                        placeholder={`R$ ${vencerAte30DiasvencidosAte14Dias}`}
                                        onBlur={(event) => handleVencerAte30DiasvencidosAte14DiasTotalChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 31 a 60 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencer3160Dias"
                                        placeholder={`R$ ${vencer3160Dias}`}
                                        onBlur={(event) => handleVencer3160DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 61 a 90 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencer6190Dias"
                                        placeholder={`R$ ${vencer6190Dias}`}
                                        onBlur={(event) => handleVencer6190DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 91 a 180 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="limitesCreditoVencimentoAte360Dias"
                                        placeholder={`R$ ${vencer91180Dias}`}
                                        onBlur={(event) => handleVencer91180DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 181 a 360 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="limitesCreditoVencimentoAte360Dias"
                                        placeholder={`R$ ${vencer181360Dias}`}
                                        onBlur={(event) => handleVencer181360DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Acima de 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="limitesCreditoVencimentoAte360Dias"
                                        placeholder={`R$ ${vencerAcima360Dias}`}
                                        onBlur={(event) => handleVencerAcima360DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Indeterminado </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencerIndeterminado"
                                        placeholder={`R$ ${vencerIndeterminado}`}
                                        onBlur={(event) => handleVencerIndeterminadoChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Vencido - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total  </th>
                                <th className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="limitesCreditoValorTotal"
                                        placeholder={`R$ ${vencidoTotal}`}
                                        onBlur={(event) => handleVencidoTotalChange(event.target.value)}
                                        className="thinputColunasTabelaPropostasBacen"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 15 a 30 dias </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencido1530Dias"
                                        placeholder={`R$ ${vencido1530Dias}`}
                                        onBlur={(event) => handleVencido1530DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 31 a 60 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencido3160Dias"
                                        placeholder={`R$ ${vencido3160Dias}`}
                                        onBlur={(event) => handleVencido3160DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 61 a 90 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencido6190Dias"
                                        placeholder={`R$ ${vencido6190Dias}`}
                                        onBlur={(event) => handleVencido6190DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 91 a 180 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencido91180Dias"
                                        placeholder={`R$ ${vencido91180Dias}`}
                                        onBlur={(event) => handleVencido91180DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 181 a 360 dias</td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencido181360Dias"
                                        placeholder={`R$ ${vencido181360Dias}`}
                                        onBlur={(event) => handleVencido181360DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Acima de 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="vencidoAcima360Dias"
                                        placeholder={`R$ ${vencidoAcima360Dias}`}
                                        onBlur={(event) => handleVencidoAcima360DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Prejuízo - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="prejuizoTotal"
                                        placeholder={`R$ ${prejuizoTotal}`}
                                        onBlur={(event) => handlePrejuizoTotalChange(event.target.value)}
                                        className="thinputColunasTabelaPropostasBacen"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Até 12 meses </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="prejuizoAte12Meses"
                                        placeholder={`R$ ${prejuizoAte12Meses}`}
                                        onBlur={(event) => handlePrejuizoAte12MesesChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Acima de 12 meses </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="prejuizoAcima12Meses"
                                        placeholder={`R$ ${prejuizoAcima12Meses}`}
                                        onBlur={(event) => handlePrejuizoAcima12MesesChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Coobrigação - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="prejuizoTcoobrigacaoTotalotal"
                                        placeholder={`R$ ${coobrigacaoTotal}`}
                                        onBlur={(event) => handleCoobrigacaoTotalChange(event.target.value)}
                                        className="thinputColunasTabelaPropostasBacen"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Coobrigação Assumida </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="coobrigacaoAssumida"
                                        placeholder={`R$ ${coobrigacaoAssumida}`}
                                        onBlur={(event) => handleCoobrigacaoAssumidaChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Coobrigação Prestadas </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="coobrigacaoPrestadas"
                                        placeholder={`R$ ${coobrigacaoPrestadas}`}
                                        onBlur={(event) => handleCoobrigacaoPrestadasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Créditos a Liberar - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="creditosLiberarTotal"
                                        placeholder={`R$ ${creditosLiberarTotal}`}
                                        onBlur={(event) => handleCreditosLiberarTotalChange(event.target.value)}
                                        className="thinputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Créditos a Liberar até 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="creditosLiberarAte360Dias"
                                        placeholder={`R$ ${creditosLiberarAte360Dias}`}
                                        onBlur={(event) => handleCreditosLiberarAte360DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Créditos a Liberar acima de 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="creditosLiberarAcima360Dias"
                                        placeholder={`R$ ${creditosLiberarAcima360Dias}`}
                                        onBlur={(event) => handleCreditosLiberarAcima360DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Limites de Crédito - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="limitesCreditoValorTotal"
                                        placeholder={`R$ ${limitesCreditoValorTotal}`}
                                        onBlur={(event) => handleLimitesCreditoValorTotalChange(event.target.value)}
                                        className="thinputColunasTabelaPropostasBacen"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Limite de Crédito com vencimento até 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    {/* Formate o valor usando CurrencyInput */}
                                    <CurrencyInput
                                        name="limitesCreditoVencimentoAte360Dias"
                                        placeholder={`R$ ${limitesCreditoVencimentoAte360Dias}`}
                                        onBlur={(event) => handleLimitesCreditoVencimentoAte360DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Limites de Crédito com vencimento acima de 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'>
                                    <CurrencyInput
                                        name="limitesCreditoVencimentoAcima360Dias"
                                        placeholder={`R$ ${limitesCreditoVencimentoAcima360Dias}`}
                                        onBlur={(event) => handleLimitesCreditoVencimentoAcima360DiasChange(event.target.value)}
                                        className="inputColunasTabelaPropostasBacen"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divbotaoEnviarObservacoes' onClick={sendBacen}>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
                <br />
                {isLoading && <Loading/>}
            </div>
        );
    }

    function AllsData() {
        const handleValorPendenciasFinanceirasAllsChange = (value) => {
            setValorPendenciasFinanceirasAlls(value);
        };
        const handleValorRecuperacoesAllsChange = (value) => {
            setValorRecuperacoesAlls(value);
        };
        const handleValorProtestosAllsChange = (value) => {
            setValorProtestosAlls(value);
        };
        const handleLimiteSugeridoAllsChange = (value) => {
            setLimiteSugeridoAlls(value);
        };
        const handleValorRestricoesAllsChange = (value) => {
            setValorRestricoesAlls(value);
        };
        const handleNumPendenciasFinanceirasAllsChange = (value) => {
            setNumPendenciasFinanceirasAlls(value);
        };
        const handleNumRecuperacoesAllsChange = (value) => {
            setNumRecuperacoesAlls(value);
        }
        const handleNumChequeSemFundoAllsChange = (value) => {
            setNumChequeSemFundoAlls(value);
        }
        const handleNumProtestosAllsChange = (value) => {
            setNumProtestosAlls(value);
        }
        const handleNumRestricoesAllsChange = (value) => {
            setNumRestricoesAlls(value);
        }


        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de pendências financeiras </label>
                                <input
                                    name="NumPendenciasFinanceirasAlls"
                                    placeholder={numPendenciasFinanceirasAlls}
                                    onBlur={(event) => handleNumPendenciasFinanceirasAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Valor das pendências financeiras </label>
                                <CurrencyInput
                                    name="ValorPendenciasFinanceirasAlls"
                                    placeholder={`R$ ${valorPendenciasFinanceirasAlls}`}
                                    onBlur={(event) => handleValorPendenciasFinanceirasAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de recuperação </label>
                                <input
                                    name="NumRecuperacoesAlls"
                                    placeholder={numRecuperacoesAlls}
                                    onBlur={(event) => handleNumRecuperacoesAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor da Recuperação </label>
                                <CurrencyInput
                                    name="valorRecuperacoesAlls"
                                    placeholder={`R$ ${valorRecuperacoesAlls}`}
                                    onBlur={(event) => handleValorRecuperacoesAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de cheque sem fundo </label>
                                <input
                                    name="NumChequeSemFundoAlls"
                                    placeholder={numChequeSemFundoAlls}
                                    onBlur={(event) => handleNumChequeSemFundoAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de protestos </label>
                                <input
                                    name="NumProtestosAlls"
                                    placeholder={numProtestosAlls}
                                    onBlur={(event) => handleNumProtestosAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor dos protestos </label>
                                <CurrencyInput
                                    name="valorProtestosAlls"
                                    placeholder={`R$ ${valorProtestosAlls}`}
                                    onBlur={(event) => handleValorProtestosAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Limite Sugerido </label>
                                <CurrencyInput
                                    name="limiteSugeridoAlls"
                                    placeholder={`R$ ${limiteSugeridoAlls}`}
                                    onBlur={(event) => handleLimiteSugeridoAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de restrições </label>
                                <input
                                    name="NumRestricoesAlls"
                                    placeholder={numRestricoesAlls}
                                    onBlur={(event) => handleNumRestricoesAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor das restrições </label>
                                <CurrencyInput
                                    name="valorRestricoesAlls"
                                    placeholder={`R$ ${valorRestricoesAlls}`}
                                    onBlur={(event) => handleValorRestricoesAllsChange(event.target.value)}
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="text" disabled />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="number" disabled />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divbotaoEnviarObservacoes' onClick={sendAllsData}>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
                {isLoading && <Loading/>}
            </div>
        );
    }

    function Upload() {
        return (
            <div className='divUploadFiles'>
                <div className='stringUpload'>
                    <text> Faça o upload dos seus documentos </text>
                </div>
                <div className='divinputFiles'>
                    <input className='inputFiles' name='file' type="file" onChange={(event) => setFiles(event.target.files)} multiple />
                </div>
                <div className='divlistaFiles'>
                    <ul className='listaFiles'>
                        {filesReceived.map((file, index) =>
                            <li key={index} className='liFiles'> <a href={file.url_arquivo}>{file.url_arquivo}</a> 
                                {file.name}
                            </li>
                        )}
                    </ul>
                </div>
                <div className='divbotaoEnviarArquivos' onClick={() => sendFiles()}>
                    <button className='botaoEnviarArquivos'>
                        <span className='stringEnviarDados'> Enviar Arquivos </span>
                    </button>
                </div>
            </div>
        );
    }

        
    // <UploadContainer />

    return (
        <div>
            {loading === false ? (
                <div className='containerPrincipal'>
                    <div className='positionNavLateral'>
                        <NavLateral />
                    </div>
                    <div className='positionNavSuperior'>
                        <NavSuperior />
                    </div>
                    <div className='containerGeral'>
                        <div className='textoPropostas'>
                            <text className='stringTitulos'> {data.isCnpj == false ? customerName : customerRazaoSocial} </text>
                        </div>
                        <br />
                        <div className='rowbotoes'>
                            <button className={`botoes ${muda === 'infPropostas' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("infPropostas")}>
                                <span className='stringDados'> Informações </span>
                            </button>
                            <button className={`botoes ${muda === 'InfPessoais' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("InfPessoais")}>
                                <span className='stringDados'> Informações Pessoais </span>
                            </button>
                            <button className={`botoes ${muda === 'bureaus' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("bureaus")}>
                                <span className='stringDados'> Bureaus Crédito </span>
                            </button>
                            <button className={`botoes ${muda === 'bacen' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("bacen")}>
                                <span className='stringDados'> Bacen </span>
                            </button>
                            <button className={`botoes ${muda === 'allsdata' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("allsdata")}>
                                <span className='stringDados'> Alls Data </span>
                            </button>
                            <button className={`botoes ${muda === 'upload' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("upload")}>
                                <span className='stringDados'> Arquivos </span>
                            </button>
                        </div>
                        <br />
                        <br />
                        <hr className='linha' />
                        <div>
                            {muda === 'infPropostas' && (
                                <InfPropostas />
                            )}
                            {muda === 'InfPessoais' && (
                                <InfPessoais />
                            )}
                            {muda === 'bureaus' && (
                                <BearusCredito />
                            )}
                            {muda === 'bacen' && (
                                <Bacen />
                            )}
                            {muda === 'allsdata' && (
                                <AllsData />
                            )}
                            {muda === 'upload' && (
                                <Upload />
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export { VisualizacaoIndividual };