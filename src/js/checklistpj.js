import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2'
import '../css/checklist.css';
import Loading from './loading'
import NewModal from "../components/UI/NewModal"

function ChecklistPj() {
    const navigate = useNavigate();
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [segmento, setSegmento] = useState('');
    const [nomeSocio, setNomeSocio] = useState('');
    const [cpfSocio, setCpfSocio] = useState('');
    const [email, setEmail] = useState('');
    const [rendaMedia, setRendaMedia] = useState('');
    const [valorDesejado, setValorDesejado] = useState('');
    const [prazo, setPrazo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataAbertura, setDataAbertura] = useState('');
    const [aceite, setAceite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenModalTerms, setIsOpenModalTerms] = useState(false)
    const [isOpenModalTermsScr, setIsOpenModalTermsScr] = useState(false)

    const toggleModalTerms = () => {
        setIsOpenModalTerms(!isOpenModalTerms)
    }
    
    const toggleModalTermsScr = () => {
        setIsOpenModalTermsScr(!isOpenModalTermsScr)
    }

    function sendData() {
        setIsLoading(true);
        if (aceite == false) {
            alert("Você deve concordar com os termos e condições!")
            setIsLoading(false);
        } else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "cnpj": `${cnpj}`,
                "razaoSocial": `${razaoSocial}`,
                "nomeFantasia": `${nomeFantasia}`,
                "segmento": `${segmento}`,
                "nomeSocio": `${nomeSocio}`,
                "cpfSocio": `${cpfSocio}`,
                "email": `${email}`,
                "telefone": `${telefone}`,
                "receitaMedia": rendaMedia,
                "valorDesejado": valorDesejado,
                "prazo": prazo,
                "data_abertura": `${dataAbertura}`,
                "codigo_indicador": Cookies.get('codigoIndicador')
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://35.175.231.117:8080/api/v1/business/formwebindicacaopj", requestOptions)
                .then(response => {
                    if (response.status === 200) {
                        // Exibe o modal Swal.fire com timer embutido
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Dados enviados com sucesso!',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            // Redireciona para uma página externa após o modal
                            window.location.href = "https://www.google.com";
                        });
                    }
                })
                .then(result => console.log(result))
                .catch(error => console.log('error', error))
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }

    const handleRendaMediaChange = (value, name) => {
        setRendaMedia(value);
    };

    const handlevalorDesejadoChange = (value, name) => {
        setValorDesejado(value);
    };

    return (
        <>
            <NewModal isOpen={isOpenModalTerms} onRequestClose={toggleModalTerms}>
                <div className='modalcontainer'>
                    <h1>TERMOS DE USO E CONDIÇÕES</h1><br></br><br></br>
                    <h2>POLÍTICA DE COOKIES E PRIVACIDADE BDI SERVIÇOS FINANCEIROS LTDA.</h2>
                    A BDI Serviços Financeiros respeita a privacidade dos seus usuários e reconhece a importância da proteção das informações pessoais dos mesmos. A presente Política de Cookies e Privacidade foi elaborada para esclarecer a forma como as informações pessoais dos usuários são coletadas, armazenadas e utilizadas pela Empresa. <br></br><br></br>
                    <h2>COLETA DE INFORMAÇÕES PESSOAIS</h2>
                    A Empresa poderá coletar informações pessoais dos usuários por meio de diversos canais, incluindo, mas não se limitando a, cadastros em formulários online, cookies, análise de crédito e outras fontes de terceiros. Essas informações incluem, mas não se limitam a, nome, endereço, e-mail, número de telefone, informações financeiras e outros dados necessários para a realização de análises de crédito. <br></br><br></br>
                    <h2>USO DE COOKIES</h2>
                    A Empresa poderá utilizar cookies para coletar informações sobre a navegação dos usuários em seu site. Essas informações são utilizadas para melhorar a experiência do usuário e personalizar o conteúdo apresentado. Os usuários podem optar por desativar os cookies em seus navegadores, no entanto, isso poderá impactar a sua experiência no site. <br></br><br></br>
                    <h2>ANÁLISE DE CRÉDITO</h2>
                    A Empresa poderá realizar análises de crédito com base nas informações pessoais coletadas dos usuários, visando avaliar a capacidade de pagamento dos mesmos. As informações coletadas poderão ser compartilhadas com empresas terceiras especializadas em análise de crédito. <br></br><br></br>
                    <h2>ARMAZENAMENTO E PROTEÇÃO DAS INFORMAÇÕES PESSOAIS</h2>
                    A Empresa se compromete a armazenar as informações pessoais dos usuários de forma segura e a protegê-las contra acessos não autorizados, perda, roubo, fraude ou uso indevido. A Empresa adota medidas de segurança adequadas para proteger as informações pessoais dos usuários, incluindo a utilização de protocolos de criptografia de dados. <br></br><br></br>
                    <h2>COMPARTILHAMENTO DE INFORMAÇÕES PESSOAIS</h2>
                    A Empresa poderá compartilhar as informações pessoais coletadas com empresas terceiras, tais como empresas especializadas em análise de crédito, visando garantir a qualidade dos serviços prestados. A Empresa se compromete a compartilhar as informações pessoais dos usuários apenas com empresas que tenham políticas de privacidade compatíveis com as suas. <br></br><br></br>
                    <h2>DIREITO DOS USUÁRIOS</h2>
                    Os usuários têm o direito de acessar, retificar e excluir suas informações pessoais armazenadas pela Empresa. Os usuários podem exercer esses direitos por meio de solicitação enviada para o endereço de e-mail da Empresa. <br></br><br></br>
                    <h2>ATUALIZAÇÃO DA POLÍTICA DE COOKIES E PRIVACIDADE</h2>
                    A Empresa poderá atualizar esta Política de Cookies e Privacidade periodicamente, visando atender às necessidades dos usuários e às exigências legais. Os usuários serão notificados sobre as alterações por meio de comunicação no site da Empresa. <br></br><br></br>
                    <h2>PRÁTICAS REGULAMENTADAS PELA LEI Nº 13.709, DE 14 DE AGOSTO DE 2018 – LEI GERAL DE PROTEÇÃO DE DADOS.</h2>
                    Ao acessar e utilizar os serviços oferecidos pela Empresa, os usuários declaram estar cientes e concordar com os termos e condições desta Política de Cookies e Privacidade. <br></br><br></br>
                </div>
            </NewModal>
            <NewModal isOpen={isOpenModalTermsScr} onRequestClose={toggleModalTermsScr}>
                <div className='modalcontainer'>
                <h1>Termo de Autorização para Consulta SCR</h1><br></br><br></br>
                <h2>COMUNICADO DE INCLUSÃO E AUTORIZAÇÃO
                    PARA CONSULTA AO SISTEMA DE INFORMAÇÕES DE
                    CRÉDITO DO BANCO CENTRAL DO BRASIL – SCR</h2><br></br><br></br>
                Autorizo a UY3 Sociedade de Crédito Direto S.A. (“SCD”) em conjunto com BDI SERVICOS
                FINANCEIROS
                LTDA e seus parceiros de análise de credito a compartilhar e consultar os débitos e
                responsabilidades
                decorrentes de operações com característica de crédito e as informações e os
                registros de medidas
                judiciais que constem ou venham a constar em nome da {nomeSocio} e {cpfSocio} do
                Sistema
                de Informações de Crédito (SCR), gerido pelo Banco Central do Brasil - Bacen, ou dos
                sistemas que venham
                complementá-lo ou a substitui-lo.<br></br><br></br>
                Estou ciente de que: a) o SCR tem por finalidades prover informações ao Banco
                Central do Brasil, para
                fins de monitoramento do crédito no sistema financeiro e para o exercício de suas
                atividades de
                fiscalização e propiciar o intercâmbio de informações entre instituições
                financeiras, conforme definido
                no § 1º do art. 1º da Lei Complementar nº 105, de 10 de janeiro de 2001, sobre o
                montante de
                responsabilidades de clientes em operações de crédito, com o objetivo de subsidiar
                decisões de crédito
                e de negócios; b) poderei ter acesso aos dados constantes em meu nome no SCR por
                meio do sistema
                registrado do Banco Central do Brasil – Bacen ou na Central de Atendimento ao
                Público do Bacen; c) a
                consulta sobre qualquer informação ao SCR depende de minha prévia autorização, que é
                lavrada por
                meio desse termo; d) as manifestações de discordância quanto às informações
                constantes no SCR e os
                pedidos de correção, exclusão e registro de medidas judiciais no SCR deverão ser
                dirigidos a SCD, por
                meio de requerimento escrito e fundamentado enviado pelo Cliente, acompanhado da
                respectiva
                decisão judicial, conforme aplicável.<br></br><br></br>
                O Cliente declara estar de acordo com a formalização desta autorização por meio de
                todas as formas
                em direito admitidas, incluindo meios eletrônicos e digitais como válidos e
                plenamente eficazes, ainda
                que seja estabelecida assinatura e aceitação eletrônica ou certificação fora dos
                padrões ICP – Brasil,
                conforme disposto pelo art. 10 da Medida Provisória nº 2.200/2001 em vigor no
                Brasil.<br></br><br></br>
                </div>
            </NewModal>

            <div className="containerchecklist">
                <div className='contentchecklist'>
                    <img className="deltalogoazulchecklist" src='https://docsbora.s3.amazonaws.com/uploads/deltalogoazul.png' alt="Logo" />
                    <h2 className='h2checklist'>Informações básicas PJ</h2>
                    <form>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>CNPJ</label>
                            <InputMask
                                mask="99.999.999/9999-99"
                                className='inputchecklist'
                                type="text"
                                value={cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
                                placeholder="Digite o CNPJ da empresa"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Razão Social</label>
                            <input
                                className='inputchecklist'
                                type="text"
                                value={razaoSocial}
                                onChange={(e) => setRazaoSocial(e.target.value)}
                                placeholder="Digite a razão social da empresa"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Nome Fantasia</label>
                            <input
                                className='inputchecklist'
                                type="text"
                                value={nomeFantasia}
                                onChange={(e) => setNomeFantasia(e.target.value)}
                                placeholder="Digite o nome fantasia da empresa"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Segmento</label>
                            <input
                                className='inputchecklist'
                                type="text"
                                value={segmento}
                                onChange={(e) => setSegmento(e.target.value)}
                                placeholder="Digite o segmento da empresa"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Data Abertura</label>
                            <input
                                className='inputchecklist'
                                type='date'
                                value={dataAbertura}
                                onChange={(e) => setDataAbertura(e.target.value)}
                                placeholder="Digite a data de abertura da empresa"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist' htmlFor="email">Nome do sócio</label>
                            <input
                                className='inputchecklist'
                                type="text"
                                value={nomeSocio}
                                onChange={(e) => setNomeSocio(e.target.value)}
                                placeholder="Digite o nome do principal sócio da empresa"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>CPF do sócio</label>
                            <InputMask
                                mask="999.999.999-99"
                                className='inputchecklist'
                                type="text"
                                value={cpfSocio}
                                onChange={(e) => setCpfSocio(e.target.value)}
                                placeholder="Digite o CPF do principal sócio da empresa"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Email</label>
                            <input
                                className='inputchecklist'
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite um email de contato"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Telefone</label>
                            <InputMask
                                mask="(99) 99999-9999"
                                className='inputchecklist'
                                type="text"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="Digite um telefone de contato"
                                required
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Receita Média Mensal</label>
                            <CurrencyInput
                                name="valorDesejado"
                                value={rendaMedia}
                                onValueChange={handleRendaMediaChange}
                                decimalSeparator=","
                                groupSeparator="."
                                prefix="R$ "
                                placeholder="Digite a receita mensal da empresa"
                                required
                                className="inputchecklist"
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Valor Desejado</label>
                            <CurrencyInput
                                name="valorDesejado"
                                value={valorDesejado}
                                onValueChange={handlevalorDesejadoChange}
                                decimalSeparator=","
                                groupSeparator="."
                                prefix="R$ "
                                placeholder="Digite o valor desejado"
                                required
                                className="inputchecklist"
                            />
                        </div>
                        <div className="form-groupchecklist">
                            <label className='classNamechecklist'>Prazo</label>
                            <input
                                className='inputchecklist'
                                type="number"
                                value={prazo}
                                onChange={(e) => setPrazo(e.target.value)}
                                placeholder="Digite em quantas vezes você quer pagar"
                                required
                            />
                        </div>
                        <div className='form-groupchecklist-checkbox'>
                            <input type="checkbox" onChange={(e) => setAceite(e.target.value)} />
                            <text>Estou de acordo com os <a className='termos-checklist' onClick={toggleModalTerms}>termos e condições </a>e com o <a className='termos-checklist' onClick={toggleModalTermsScr}>termo de autorização de consulta ao SCR.</a></text>
                        </div>
                        <div className='buttonchecklist' onClick={() => sendData()}>Enviar</div>
                    </form>
                </div>
                {isLoading && <Loading/>}
            </div>
        </>
    )
}

export { ChecklistPj };