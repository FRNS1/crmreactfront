import React, { useState, useEffect } from 'react';
import '../css/registro_pagamento_individual.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import InputMask from 'react-input-mask';
import { format } from 'date-fns';
import Cookies from 'js-cookie';
import CurrencyInput from 'react-currency-input-field';
import { id } from 'date-fns/locale';
import axios from 'axios';


function RegistroPagamentoIndividual() {

    const [muda, handleButtonClick] = useState('geral');
    const [loanDetails, setLoanDetails] = useState([])
    const [payments, setPayments] = useState([]);
    const [vencimento, setVencimento] = useState('');
    const [valorParcela, setValorParcela] = useState('');
    const [pago, setPago] = useState('');
    const [dataPagamento, setDataPagamento] = useState('');

    const Mudapagina = (value) => {
        handleButtonClick(value);
    };

    async function fetchLoanDetails() {
        const token = Cookies.get('token');
        const proposalId = Cookies.get('chosenLoan');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const urlLoan = `http://35.175.231.117:8080/api/v1/proposal/loans/getproposal/info/${proposalId}`;

        try {
            const response = await fetch(urlLoan, requestOptions);
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log("consegui")
            setLoanDetails(result);
            console.log(result);
        } catch (error) {
            console.error('error', error);
        }
    }

    async function fetchFluxoDePagamentos() {
        const token = Cookies.get('token');
        const proposalId = Cookies.get('chosenLoan');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const urlFluxo = `http://35.175.231.117:8080/api/v1/payments/getloandetails/${proposalId}`;

        try {
            const response = await fetch(urlFluxo, requestOptions);
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setPayments(result);
            setValorParcela(result.pagamento);
            setPago(result.pago);
            setDataPagamento(result.dataPagamento);
            console.log(result);
        } catch (error) {
            console.error('error', error);
        }
    }

    async function sendVencimento(id, vencimento){
        try{
            const dataPagamentoSplit = vencimento.split("/");
            let dataPagamentoUs = `${dataPagamentoSplit[2]}-${dataPagamentoSplit[1]}-${dataPagamentoSplit[0]}`;
            const urlPost = `http://35.175.231.117:8080/api/v1/payments/update/vencimento`;
            const response = await axios.post(urlPost, {
                parcela: id,
                vencimento: dataPagamentoUs
            }, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                    'Content-Type': 'application/json',
                },
            })
            if (response.status == 200){
                alert("Dados atualizados com sucesso!");
            }
        }catch (error){
            console.log(error);
        }
    }

    async function sendValorParcela(id, valorParcela){
        try{
            const urlPost = `http://35.175.231.117:8080/api/v1/payments/update/valorparcela`;
            const response = await axios.post(urlPost, {
                parcela: id,
                valor_parcela: valorParcela.replace("R$ ", "").replace(",", ".")
            }, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                    'Content-Type': 'application/json',
                },
            })
            if (response.status == 200){
                alert("Dados atualizados!")
            }
        }catch (error){
            console.log(error);
        }
    }

    async function sendPago(id, pago){
        try{
            const urlPost = `http://35.175.231.117:8080/api/v1/payments/update/pago`;
            const response = await axios.post(urlPost, {
                parcela: id,
                pago: pago
            }, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            })
            if (response.status == 200){
                alert("Dados atualizados!");
            }
        }catch (error){
            console.log(error);
        }
    }

    async function sendDataPagamento(id, dataPagamento){
        try{
            const dataPagamentoSplit = dataPagamento.split("/");
            let dataPagamentoUs = `${dataPagamentoSplit[2]}-${dataPagamentoSplit[1]}-${dataPagamentoSplit[0]}`;
            const response = await axios.post("http://35.175.231.117:8080/api/v1/payments/update/datapagamento", {
                parcela: id,
                data_pagamento: dataPagamentoUs
            }, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                    'Content-Type': 'application/json',
                },
            })
            if (response.status == 200){
                alert("Dados atualizados!");
            }
        }catch (error){
            console.log(error);
        }
    }

    // async function sendData(id) {
    //     console.log(pago);
    //     console.log(valorParcela);
    //     console.log(dataPagamento);
    //     let dataPagamentoUs;
    //     try {
    //         const dataPagamentoSplit = dataPagamento.split("/");
    //         dataPagamentoUs = `${dataPagamentoSplit[2]}-${dataPagamentoSplit[1]}-${dataPagamentoSplit[0]}`;
    //     } catch {
    //         dataPagamentoUs = dataPagamento;
    //         console.log("Não mudou a data");
    //     }

    //     try{
    //         valorParcela = valorParcela.replace("R$ ", "").replace(",", ".");
    //     } catch {
    //         console.log("Valor indefinido");
    //     }

    //     const data = {
    //         parcela: id,
    //         valor_parcela: valorParcela.replace("R$ ", "").replace(",", "."),
    //         pago: pago,
    //         data_pagamento: dataPagamentoUs,
    //     };

    //     const urlPost = `http://35.175.231.117:8080/api/v1/payments/update`;

    //     try {
    //         const response = await axios.post(urlPost, data, {
    //             headers: {
    //                 Authorization: `Bearer ${Cookies.get('token')}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         if (response.status === 200) {
    //             alert("Dados atualizados");
    //         }
    //     } catch (error) {
    //         console.error("Erro ao enviar os dados:", error);
    //     }
    // }

    useEffect(() => {
        fetchLoanDetails();
        fetchFluxoDePagamentos();
    }, []);

    function formataTelefone(telefone) {
        try {
            const partesTelefone = telefone.split('')
            if (partesTelefone.length == 11) {
                const parte1 = partesTelefone[0];
                const parte2 = partesTelefone[1];
                const parte3 = partesTelefone[2];
                const parte4 = partesTelefone[3];
                const parte5 = partesTelefone[4];
                const parte6 = partesTelefone[5];
                const parte7 = partesTelefone[6];
                const parte8 = partesTelefone[7];
                const parte9 = partesTelefone[8];
                const parte10 = partesTelefone[9];
                const parte11 = partesTelefone[10];
                return `(${parte1}${parte2}) ${parte3}${parte4}${parte5}${parte6}${parte7}-${parte8}${parte9}${parte10}${parte11}`;

            } else if (partesTelefone.length == 10) {
                const parte1 = partesTelefone[0];
                const parte2 = partesTelefone[1];
                const parte3 = partesTelefone[2];
                const parte4 = partesTelefone[3];
                const parte5 = partesTelefone[4];
                const parte6 = partesTelefone[5];
                const parte7 = partesTelefone[6];
                const parte8 = partesTelefone[7];
                const parte9 = partesTelefone[8];
                const parte10 = partesTelefone[9];
                return `(${parte1}${parte2}) ${parte3}${parte4}${parte5}${parte6}-${parte7}${parte8}${parte9}${parte10}`;

            } else {
                return 'Telefone Inválido';
            }
        } catch (error) {
            console.log(error);
        }
    }

    function formataCnpj(cnpj) {
        try {
            const partesCNPJ = cnpj.split('')
            if (partesCNPJ.length != 14) {
                return `Documento inválido`

            } else {
                const parte1 = partesCNPJ[0];
                const parte2 = partesCNPJ[1];
                const parte3 = partesCNPJ[2];
                const parte4 = partesCNPJ[3];
                const parte5 = partesCNPJ[4];
                const parte6 = partesCNPJ[5];
                const parte7 = partesCNPJ[6];
                const parte8 = partesCNPJ[7];
                const parte9 = partesCNPJ[8];
                const parte10 = partesCNPJ[9];
                const parte11 = partesCNPJ[10];
                const parte12 = partesCNPJ[11];
                const parte13 = partesCNPJ[12];
                const parte14 = partesCNPJ[13];
                return `${parte1}${parte2}.${parte3}${parte4}${parte5}.${parte6}${parte7}${parte8}/${parte9}${parte10}${parte11}${parte12}-${parte13}${parte14}`;
            }
        } catch (error) {
            console.log(error);
        }
    }

    function formataCpf(cpf) {
        try {
            const partesCPF = cpf.split('')
            if (partesCPF.length != 11) {
                return `Documento inválido`
            } else {
                const parte1 = partesCPF[0];
                const parte2 = partesCPF[1];
                const parte3 = partesCPF[2];
                const parte4 = partesCPF[3];
                const parte5 = partesCPF[4];
                const parte6 = partesCPF[5];
                const parte7 = partesCPF[6];
                const parte8 = partesCPF[7];
                const parte9 = partesCPF[8];
                const parte10 = partesCPF[9];
                const parte11 = partesCPF[10];
                return `${parte1}${parte2}${parte3}.${parte4}${parte5}${parte6}.${parte7}${parte8}${parte9}-${parte10}${parte11}`;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='containerPrincipal'>
            <div className='positionNavLateral'>
                <NavLateral />
            </div>
            <div className='positionNavSuperior'>
                <NavSuperior />
            </div>
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringTitulos'> {loanDetails?.proposal?.customer?._cnpj == true ? loanDetails?.proposal?.customer?.razao_social : loanDetails?.proposal?.customer?.nome_completo} </text>
                </div>
                <table className='tabelaPagamentosIndividual'>
                    <thead>
                        <tr>
                            <td>
                                <button className={`botoesGerais ${muda === 'geral' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("geral")}>
                                    <span className='stringbotoesGerais'> Geral </span>
                                </button>
                            </td>
                            <td>
                                <button className={`botoesGerais ${muda === 'observacoes' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("observacoes")}>
                                    <span className='stringbotoesGerais'> Observações </span>
                                </button>
                            </td>
                            <td>
                                <button className='botaofinalizarContrato'>
                                    <span className='stringbotoesGerais'> Finalizar Contrato </span>
                                </button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> Documento </th>
                            <th> Email </th>
                            <th> Telefone </th>
                            <th> Valor Contrato </th>
                            <th> Qtd. parcelas </th>
                            <th> Taxa </th>
                            <th> Juros Total </th>
                            <th> Multa </th>
                            <th> Mora p/dia </th>
                        </tr>
                        <tr>
                            <td>{loanDetails?.proposal?.customer?._cnpj == true ? formataCnpj(loanDetails?.proposal?.customer?.cnpj) : formataCpf(loanDetails?.proposal?.customer?.cpf)}</td>
                            <td>{loanDetails?.contact?.email}</td>
                            <td>{formataTelefone(loanDetails?.contact?.telefone)}</td>
                            <td>{`R$ ${loanDetails?.proposal?.valor_liberado}`}</td>
                            <td>{loanDetails?.proposal?.prazo}</td>
                            <td>{` ${loanDetails?.proposal?.taxa}%`}</td>
                            <td>{`R$ ${loanDetails?.proposal?.total_juros}`}</td>
                            <td>1% do valor da parcela.</td>
                            <td>0,033% do valor da parcela.</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    {muda === 'geral' && (
                        <div className='divtabelaPagamentosIndividual'>
                        <table className='tabelaPagamentosIndividual'>
                            <thead>
                                <tr>
                                    <th> Parcela </th>
                                    <th> Vencimento </th>
                                    <th> Saldo Devedor </th>
                                    <th> Amortização </th>
                                    <th> Juros </th>
                                    <th> Valor Parcela </th>
                                    <th> Pago? </th>
                                    <th> Data Pagamento </th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment) => (
                                    <tr key={payment.id}>
                                        <td> {payment.num_parcela} </td>
                                        <td> <InputMask mask="99/99/9999" onChange={(e) => sendVencimento(payment.parcela_id, e.target.value)} placeholder={payment.vencimento ? format(new Date(payment.vencimento), 'dd/MM/yyyy') : ''} type="text" className="inputDataPagamentos" /> </td>
                                        <td> {`R$ ${payment.saldo_devedor}`} </td>
                                        <td> {payment.amortizacao} </td>
                                        <td> {`R$ ${payment.juros}`} </td>
                                        <td>
                                            <CurrencyInput
                                                prefix='R$ '
                                                name="valorParcela"
                                                type="text"
                                                placeholder={`R$ ${payment.pagamento}`}
                                                className="selectPago"
                                                onChange={(e) => sendValorParcela(payment.parcela_id, e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <select className='selectPago' disabled={payment.pago == "PAGO"} onChange={(e) => sendPago(payment.parcela_id, e.target.value)}>
                                                <option className='optionselectPago' value={payment.pago}> {payment.pago} </option>
                                                <option className='optionselectPago' value="VIGENTE"> VIGENTE </option>
                                                <option  className='optionselectPago' value="EM ATRASO"> EM ATRASO </option>
                                                <option className='optionselectPago' value="PAGO"> PAGO </option>
                                                <option className='optionselectPago' value="RETORNO PDD"> RETORNO PDD </option>
                                            </select>
                                        </td>
                                        <td> <InputMask mask="99/99/9999" type="text" onChange={(e) => sendDataPagamento(payment.parcela_id, e.target.value)} className="inputDataPagamentos" placeholder={payment.data_pagamento ? format(new Date(payment.data_pagamento), 'dd/MM/yyyy') : ''} /> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    )}
                    {muda === 'observacoes' && (
                        <Observacoes />
                    )}
                </div>
            </div>
        </div>
    )
}


function Observacoes() {
    return (
        <div>
            <div className='divtextAreaRegistroPagIndiv'>
                <text className='stringObservacao'>Observação:</text>
                <br />
                <textarea className='textAreaRegistroPagIndiv'> </textarea>
            </div>
            <div className='divcaixaSelect'>
                <form className='formSelect'>
                    <select className='caixaSelect'>
                        <option className='inputStatus'> Em Atraso </option>
                        <option className='inputStatus'> Negativado </option>
                        <option className='inputStatus'> Cartório </option>
                        <option className='inputStatus'> Protestado </option>
                        <option className='inputStatus'> Cobrançca Terceirizada</option>
                        <option className='inputStatus'> Jurídico </option>
                    </select>
                    <select className='caixaSelect'>
                        <option className='inputStatus'> Telefone </option>
                        <option className='inputStatus'> WhatsApp </option>
                        <option className='inputStatus'> Email </option>
                        <option className='inputStatus'> SMS </option>
                    </select>
                </form>
                <button className='botaoEnviarSelect'>
                    <span className='stringbotoesGerais'> Enviar </span>
                </button>
            </div>
            <br />
            <hr />
            <div className='divtabelaStatus'>
                <table className='tabelaStatus'>
                    <thead>
                        <tr>
                            <th> Tipo </th>
                            <th> Observação </th>
                            <th> Status do Contrato </th>
                            <th> Atualizado em: </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> TESTE </td>
                            <td> TESTE </td>
                            <td> TESTE </td>
                            <td> TESTE </td>
                        </tr>
                        <tr>
                            <td> TESTE </td>
                            <td> TESTE </td>
                            <td> TESTE </td>
                            <td> TESTE </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export { RegistroPagamentoIndividual };