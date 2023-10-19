import React, { useState } from 'react';
import Select from 'react-select';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2'
// import '../style.css'
import { Container, Content, Logo, GroupCheckelist, GroupCheckbox, CheckListBtn } from '../style'

import Loading from '../../../components/UI/Loading'
import NewModal from "../../../components/UI/NewModal"

const options = [
    { value: 'opcao1', label: 'Seleciona uma opção:' },
    { value: 'opcao2', label: 'Comércio varejista de artigos do vestuário e acessórios' },
    { value: 'opcao3', label: 'Atividades de organizações políticas' },
    { value: 'opcao4', label: 'Lanchonetes casas de chá de sucos e similares' },
    { value: 'opcao5', label: 'Comércio varejista de mercadorias em geral com predominância de produtos alimentícios - minimercados mercearias e armazéns' },
    { value: 'opcao6', label: 'Cabeleireiros manicure e pedicure' },
    { value: 'opcao7', label: 'Restaurantes e similares' },
    { value: 'opcao8', label: 'Obras de alvenaria' },
    { value: 'opcao9', label: 'Atividades de associações de defesa de direitos sociais' },
    { value: 'opcao10', label: 'Promoção de vendas' },
    { value: 'opcao11', label: 'Comércio varejista de bebidas' },
    { value: 'opcao12', label: 'Comércio varejista de artigos de óptica' },
    { value: 'opcao13', label: 'Comércio varejista de outros produtos não especificados anteriormente' },
    { value: 'opcao14', label: 'Transporte rodoviário de carga exceto produtos perigosos e mudanças intermunicipal interestadual e internacional' },
    { value: 'opcao15', label: 'Confecção de peças do vestuário exceto roupas íntimas e as confeccionadas sob medida' },
    { value: 'opcao16', label: 'Fornecimento de alimentos preparados preponderantemente para consumo domiciliar' },
    { value: 'opcao17', label: 'Comércio varejista de cosméticos produtos de perfumaria e de higiene pessoal' },
    { value: 'opcao18', label: 'Transporte rodoviário de carga exceto produtos perigosos e mudanças municipal' },
    { value: 'opcao19', label: 'Bares e outros estabelecimentos especializados em servir bebidas sem entretenimento' },
    { value: 'opcao20', label: 'Instalação e manutenção elétrica' },
    { value: 'opcao21', label: 'Comércio a varejo de peças e acessórios novos para veículos automotores' },
    { value: 'opcao22', label: 'Comércio varejista de mercadorias em geral com predominância de produtos alimentícios - hipermercados' },
    { value: 'opcao23', label: 'Atividades de estética e outros serviços de cuidados com a beleza' },
    { value: 'opcao24', label: 'Comércio varejista de produtos alimentícios em geral ou especializado em produtos alimentícios não especificados anteriormente' },
    { value: 'opcao25', label: 'Serviços de manutenção e reparação mecânica de veículos automotores' },
    { value: 'opcao26', label: 'Serviços ambulantes de alimentação' },
    { value: 'opcao27', label: 'Construção de edifícios' },
    { value: 'opcao28', label: 'Comércio varejista de produtos farmacêuticos sem manipulação de fórmulas' },
    { value: 'opcao29', label: 'Comércio varejista de carnes - açougues' },
    { value: 'opcao30', label: 'Comércio varejista de móveis' },
    { value: 'opcao31', label: 'Serviços de organização de feiras congressos exposições e festas' },
    { value: 'opcao32', label: 'Comércio varejista especializado de equipamentos e suprimentos de informática' },
    { value: 'opcao33', label: 'Condomínios prediais' },
    { value: 'opcao34', label: 'Comércio varejista de materiais de construção em geral' },
    { value: 'opcao35', label: 'Preparação de documentos e serviços especializados de apoio administrativo não especificados anteriormente' },
    { value: 'opcao36', label: 'Comércio varejista de ferragens e ferramentas' },
    { value: 'opcao37', label: 'Atividades de organizações religiosas ou filosóficas' },
    { value: 'opcao38', label: 'Outras atividades de serviços prestados principalmente às empresas não especificadas anteriormente' },
    { value: 'opcao39', label: 'Reparação e manutenção de computadores e de equipamentos periféricos' },
    { value: 'opcao40', label: 'Serviços de pintura de edifícios em geral' },
    { value: 'opcao41', label: 'Outras atividades de ensino não especificadas anteriormente' },
    { value: 'opcao42', label: 'Comercio varejista de artigos de armarinho' },
    { value: 'opcao43', label: 'Serviços combinados de escritório e apoio administrativo' },
    { value: 'opcao44', label: 'Comércio varejista de calçados' },
    { value: 'opcao45', label: 'Treinamento em desenvolvimento profissional e gerencial' },
    { value: 'opcao46', label: 'Padaria e confeitaria com predominância de revenda' },
    { value: 'opcao47', label: 'Serviços de entrega rápida' },
    { value: 'opcao48', label: 'Fabricação de móveis com predominância de madeira' },
    { value: 'opcao49', label: 'Criação de bovinos para corte' },
    { value: 'opcao50', label: 'Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo' },
    { value: 'opcao52', label: 'Consultoria em tecnologia da informação' },
    { value: 'opcao53', label: 'Suporte técnico, manutenção e outros serviços em tecnologia da informação' },
    { value: 'opcao54', label: 'Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuários' },
    { value: 'opcao55', label: 'Serviços de agronomia e de consultoria às atividades agrícolas e pecuárias' },
    { value: 'opcao56', label: 'Educação infantil - creche' },
    { value: 'opcao57', label: 'Educação infantil - pré-escola' },
    { value: 'opcao58', label: 'Educação superior - graduação' },
    { value: 'opcao59', label: 'Educação superior - graduação e pós-graduação' },
    { value: 'opcao60', label: 'Educação superior - pós-graduação e extensão' },
    { value: 'opcao61', label: 'Educação profissional de nível técnico' },
    { value: 'opcao62', label: 'Educação profissional de nível tecnológico' },
    { value: 'opcao63', label: 'Atividades de apoio à educação, exceto caixas escolares' },
    { value: 'opcao64', label: 'Serviços de agronomia e de consultoria às atividades agrícolas e pecuárias' },
]

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
    const [isOpenModalTerms, setIsOpenModalTerms] = useState(false);
    const [isOpenModalTermsScr, setIsOpenModalTermsScr] = useState(false);
    //variaveis referencia
    const [tipoReferencia, setTipoReferencia] = useState('PF')
    const [nomeReferencia, setNomeReferencia] = useState('');
    const [emailReferencia, setEmailReferencia] = useState('');
    const [documentoReferencia, setDocumentoReferencia] = useState('');
    const [telefoneReferencia, setTelefoneReferencia] = useState('');

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
                "cnpj": `${cnpj.replace(".", "").replace("-", "").replace("/", "").replace(".", "")}`,
                "razaoSocial": `${razaoSocial}`,
                "nomeFantasia": `${nomeFantasia}`,
                "segmento": `${segmento.label}`,
                "nomeSocio": `${nomeSocio}`,
                "cpfSocio": `${cpfSocio.replace(".", "").replace("-", "").replace(".", "")}`,
                "email": `${email}`,
                "telefone": `${telefone.replace("(", "").replace(")", "").replace(" ", "").replace("-", "")}`,
                "receitaMedia": rendaMedia,
                "valorDesejado": valorDesejado,
                "prazo": prazo,
                "data_abertura": `${dataAbertura}`,
                "codigo_indicador": Cookies.get('codigoIndicador'),
                "nome_referencia": `${nomeReferencia}`,
                "documento": `${documentoReferencia.replace(".", "").replace("-", "").replace(".", "").replace("/", "").replace("-", "")}`,
                "email_referencia": `${emailReferencia}`,
                "telefone_referencia": `${telefoneReferencia.replace("(", "").replace(")", "").replace(" ", "").replace("-", "")}`,
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
                            window.location.href = "http://hubdelta.com.br/";
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

    const handleChange = selectedOption => {
        console.log(`Opção selecionada: ${selectedOption.label}`);
        setSegmento(selectedOption);
    };

    const handleChangeTipo = event => {
        setTipoReferencia(event.target.value);
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
            <Container>
                <Content>
                    <Logo>
                        <img className="deltalogoazulchecklist" src='https://docsbora.s3.amazonaws.com/uploads/deltalogoazul.png' alt="Logo" />
                    </Logo>
                    <h2 className='h2checklist'>Informações básicas PJ</h2>
                    <form>
                        <GroupCheckelist>
                            <label className='classNamechecklist'>CNPJ</label>
                            <InputMask
                                mask="99.999.999/9999-99"
                                type="text"
                                value={cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
                                placeholder="Digite o CNPJ da empresa"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
                            <label className='classNamechecklist'>Razão Social</label>
                            <input
                                type="text"
                                value={razaoSocial}
                                onChange={(e) => setRazaoSocial(e.target.value)}
                                placeholder="Digite a razão social da empresa"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
                            <label className='classNamechecklist'>Nome Fantasia</label>
                            <input
                                type="text"
                                value={nomeFantasia}
                                onChange={(e) => setNomeFantasia(e.target.value)}
                                placeholder="Digite o nome fantasia da empresa"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
                            <label className='classNamechecklist'>Segmento</label>
                            <Select
                                options={options}
                                isSearchable={true}
                                placeholder="Digite para pesquisar..."
                                onChange={handleChange}
                                value={segmento}
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
                            <label className='classNamechecklist'>Data Abertura</label>
                            <input
                                type='date'
                                value={dataAbertura}
                                onChange={(e) => setDataAbertura(e.target.value)}
                                placeholder="Digite a data de abertura da empresa"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
                            <label className='classNamechecklist' htmlFor="email">Nome do sócio</label>
                            <input
                                type="text"
                                value={nomeSocio}
                                onChange={(e) => setNomeSocio(e.target.value)}
                                placeholder="Digite o nome do principal sócio da empresa"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
                            <label className='classNamechecklist'>CPF do sócio</label>
                            <InputMask
                                mask="999.999.999-99"
                                type="text"
                                value={cpfSocio}
                                onChange={(e) => setCpfSocio(e.target.value)}
                                placeholder="Digite o CPF do principal sócio da empresa"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
                            <label className='classNamechecklist'>Email</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite um email de contato"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
                            <label className='classNamechecklist'>Telefone</label>
                            <InputMask
                                mask="(99) 99999-9999"
                                type="text"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="Digite um telefone de contato"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
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
                            />
                        </GroupCheckelist>
                        <GroupCheckelist className="form-groupchecklist">
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
                            />
                        </GroupCheckelist>
                        <GroupCheckelist>
                            <label>Prazo</label>
                            <input
                                type="number"
                                value={prazo}
                                onChange={(e) => setPrazo(e.target.value)}
                                placeholder="Digite em quantas vezes você quer pagar"
                                required
                            />
                        </GroupCheckelist>
                        <GroupCheckelist>
                            <label htmlFor="email">Tipo Referência</label>
                            <select value={tipoReferencia} onChange={handleChangeTipo} required>
                                <option value="PF"> PF </option>
                                <option value="PJ"> PJ </option>
                            </select>
                        </GroupCheckelist>
                        {tipoReferencia == "PF" ? (
                            <>
                                <GroupCheckelist>
                                    <label htmlFor="valorDesejado">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={nomeReferencia}
                                        onChange={(e) => setNomeReferencia(e.target.value)}
                                        placeholder="Digite o nome completo da sua referência"
                                        required
                                    />
                                </GroupCheckelist>
                                <GroupCheckelist>
                                    <label htmlFor="valorDesejado">CPF</label>
                                    <InputMask
                                        mask="999.999.999-99"
                                        type="text"
                                        id="cpf"
                                        name="cpf"
                                        value={documentoReferencia}
                                        onChange={(e) => setDocumentoReferencia(e.target.value)}
                                        placeholder="Digite o CPF da sua referência"
                                        required
                                    />
                                </GroupCheckelist>
                                <GroupCheckelist>
                                    <label htmlFor="valorDesejado">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={emailReferencia}
                                        onChange={(e) => setEmailReferencia(e.target.value)}
                                        placeholder="Digite o email de sua referência"
                                        required
                                    />
                                </GroupCheckelist>
                                <GroupCheckelist>
                                    <label htmlFor="valorDesejado">Telefone</label>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={telefoneReferencia}
                                        onChange={(e) => setTelefoneReferencia(e.target.value)}
                                        placeholder="Digite o telefone de sua referência"
                                        required
                                    />
                                </GroupCheckelist>
                            </>
                        ) : (
                            <>
                                <GroupCheckelist>
                                    <label htmlFor="valorDesejado">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={nomeReferencia}
                                        onChange={(e) => setNomeReferencia(e.target.value)}
                                        placeholder="Digite o nome completo da sua referência"
                                        required
                                    />
                                </GroupCheckelist>
                                <GroupCheckelist>
                                    <label htmlFor="valorDesejado">CNPJ</label>
                                    <InputMask
                                        mask="99.999.999/9999-99"
                                        type="text"
                                        id="cpf"
                                        name="cpf"
                                        value={documentoReferencia}
                                        onChange={(e) => setDocumentoReferencia(e.target.value)}
                                        placeholder="Digite o CNPJ da sua referência"
                                        required
                                    />
                                </GroupCheckelist>
                                <GroupCheckelist>
                                    <label htmlFor="valorDesejado">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={emailReferencia}
                                        onChange={(e) => setEmailReferencia(e.target.value)}
                                        placeholder="Digite o email de sua referência"
                                        required
                                    />
                                </GroupCheckelist>
                                <GroupCheckelist>
                                    <label htmlFor="valorDesejado">Telefone</label>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={telefoneReferencia}
                                        onChange={(e) => setTelefoneReferencia(e.target.value)}
                                        placeholder="Digite o telefone de sua referência"
                                        required
                                    />
                                </GroupCheckelist>
                            </>
                        )}
                        <GroupCheckbox>
                            <input type="checkbox" onChange={(e) => setAceite(e.target.value)} />
                            <text>Estou de acordo com os <a className='termos-checklist' onClick={toggleModalTerms}>termos e condições </a>e com o <a className='termos-checklist' onClick={toggleModalTermsScr}>termo de autorização de consulta ao SCR.</a></text>
                        </GroupCheckbox>
                        <CheckListBtn onClick={() => sendData()}>Enviar</CheckListBtn>
                    </form>
                </Content>
                {isLoading && <Loading />}
            </Container>
        </>
    )
}

export { ChecklistPj };