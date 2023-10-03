import React, { useState, useEffect } from 'react';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import '../css/deltahubbackoffice.css';
import axios from 'axios';
import { RepeatOneSharp } from '@mui/icons-material';

function DeltaHubBackOffice() {
  const [show, setShow] = useState('');
  const [tokenHub, setTokenHub] = useState('');
  const [listCategories, setListCategories] = useState([]);
  const [listPartner, setListPartner] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [loginComplete, setLoginComplete] = useState(false);
  // Registro Categoria
  const [nomeCategoriaReg, setNomeCategoriaReg] = useState('');

  const handleCategoriaChange = (event) => {
    setNomeCategoriaReg(event.target.value);
  } 

  // Registro de Parceiro
  const [nomeParcReg, setNomeParcReg] = useState('');
  const [cnpjParcReg, setCnpjParcReg] = useState('');
  const [phoneParcReg, setPhoneParcReg] = useState('');
  // Registro Produto
  const [fileReg, setFileReg] = useState('');
  const [linkReg, setLinkReg] = useState('');
  const [productNameReg, setProductNameReg] = useState('');
  const [descricaoReg, setDescricaoReg] = useState('');
  const [partnerIdReg, setPartnerIdReg] = useState('');
  const [typeReg, setTypeReg] = useState('');
  // Atualiza Parceiro
  const [nomeParceiroUp, setParceiroUp] = useState('');
  const [cnpjParceiroUp, setCnpjParceiroUp] = useState('');
  const [phoneUp, setPhoneUp] = useState('');
  // Atualiza Produto
  const [categoriaProdUp, setCategoriaProdUp] = useState('');
  const [parceiroProdUp, setParceiroProdUp] = useState('');
  const [linkProdUp, setLinkProdUp] = useState('');
  const [descProdUp, setDescProdUp] = useState('');
  const [arteProdUp, setArteProdUp] = useState('');
  const [nomeProdUp, setNomeProdUp] = useState('');
  const [tipoProdUp, setTipoProdUp] = useState('');
  const [ativoProdUp, setAtivoProdUp] = useState(true);
  // Recuperados
  const [partner, setPartner] = useState([]);
  const [product, setProduct] = useState([]);

  async function loginHub() {
    console.log('login');
  
    try {
      const response = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/user/login", {
        username: "juridico@deltaux.com.br",
        password: "34215547"
      });
  
      const result = await response.data;
      await setTokenHub(result.token);
      setLoginComplete(true); // Marque o login como concluído
    } catch (error) {
      console.log('error', error);
    }
  }

  async function registerCategory(){
    try {
      const response = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/category/register", {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      }, {
        nomeCategoria: nomeCategoriaReg
      });
      if (response.status == 200) {
        alert("Categoria cadastrada com sucesso!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function registerParceiro(){
    try {
      const response = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/partner/register", {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      }, {
        title: nomeParcReg,
        taxId: cnpjParcReg,
        phone: phoneParcReg
      });
      if (response.status == 200) {
        alert("Parceiro cadastrado com sucesso!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function registerProduto(){
    try {
      const responseUpload = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/fileupload", {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      }, {
        file: fileReg,
      });
      if (responseUpload.status == 200) {
        try {
          const responseProduct = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/register", {
            headers: {
              Authorization: `Bearer ${tokenHub}`
            }
          }, {
            linkTrackeado: linkReg,
            productName: productNameReg,
            descricao: descricaoReg,
            partnerId: partnerIdReg,
            type: typeReg
          });
          if (responseProduct.status == 200) {
            alert("Produto cadastrado com sucesso!")
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateParceiro(id) {
    try {
      const responseUpdateParceiro = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/partner/update", {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      }, {
        id: id,
        title: nomeParceiroUp,
        taxId: cnpjParceiroUp,
        phone: phoneUp
      });
      if (responseUpdateParceiro == 200){
        alert("Parceiro atualizado com sucesso!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduto(id) {
    if (arteProdUp == ''){
      try {
        const responseUpdateProduto = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/update", {
          headers: {
            Authorization: `Bearer ${tokenHub}`
          }
        }, {
          id: id,
          categoria: categoriaProdUp,
          parceiro: parceiroProdUp,
          link: linkProdUp,
          descricao: descProdUp,
          arte: arteProdUp,
          nome: nomeProdUp,
          tipo: tipoProdUp,
          ativo: ativoProdUp
        });
        if (responseUpdateProduto.status == 200){
          alert("Produto atualizado com sucesso!");
        }
      } catch(error) {
        console.log(error);
      }
    } else {
      const responseUpload = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/fileupload", {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      }, {
        file: arteProdUp,
      });
      if (responseUpload.status == 200){
        const responseUpdateProduto = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/update", {
          headers: {
            Authorization: `Bearer ${tokenHub}`
          }
        }, {
          id: id,
          categoria: categoriaProdUp,
          parceiro: parceiroProdUp,
          link: linkProdUp,
          descricao: descProdUp,
          arte: '',
          nome: nomeProdUp,
          tipo: tipoProdUp,
          ativo: ativoProdUp
        });
        if (responseUpdateProduto.status == 200){
          alert("Produto atualizado com sucesso!");
        }
      }
    }
  }

  async function getParceiroById(id){
    try{
      const response = await axios.get(`https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/partner/getbyid/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      });
      if (response.status == 200) {
        const result = await response.data;
        setPartner(result);
        setParceiroUp(result.partnerId.name);
        setCnpjParceiroUp(result.partnerId.taxId);
        setPhoneUp(result.partnerId.phone);
      }
    }catch(error){
      console.log(error);
    }
  }

  async function getProdutoById(id){
    try{
      const response = await axios.get(`https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/getbyid/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      });
      if (response.status == 200) {
        const result = await response.data;
        setProduct(result);
        setCategoriaProdUp(result.category.categoryId);
        setParceiroProdUp(result.partnerId.partnerId);
        setLinkProdUp(result.linkTrackeado);
        setDescProdUp(result.descricao);
        setArteProdUp(result.linkImagemProdutoDesc);
        setNomeProdUp(result.productName);
        setTipoProdUp(result.type);
        setAtivoProdUp(result.ativo);
      }
    }catch(error){
      console.log(error);
    }
  }

  async function getCategories(){
    console.log('category');
    console.log(tokenHub);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${tokenHub}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/category/getall", requestOptions)
    .then(response => response.json())
    .then(result => setListCategories(result))
    .catch(error => console.log('error', error))
  }

  async function getParceiros(){
    console.log('parceiros');
    console.log(tokenHub);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${tokenHub}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/partner/getall", requestOptions)
    .then(response => response.json())
    .then(result => setListPartner(result))
    .catch(error => console.log('error', error))
  }

  async function getProdutos(){
    console.log('produtos');
    console.log(tokenHub);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${tokenHub}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/getall", requestOptions)
    .then(response => response.json())
    .then(result => setListProducts(result))
    .catch(error => console.log('error', error))
  }

  useEffect(() => {
    async function chama(){
      await loginHub();
    }
    chama();
  }, []);

  useEffect(() => {
    // Chame as funções apenas após o login ser concluído
    if (loginComplete) {
      getCategories();
      getParceiros();
      getProdutos();
    }
  }, [loginComplete]);

  function FormUpdateParceiro(){
    return(
      <div className='formModalBODH'>
        <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
        <div className='fieldsetModalBODH'>
          <h1 className='titleModalBODH'>Atualizar Parceiro</h1>
          <form>
            <div className='fieldBODH'>
              <label className='labelBODH'>Nome Parceiro</label>
              <input className='inputBODH' placeholder={partner.name}></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>CNPJ</label>
              <input className='inputBODH' placeholder={partner.taxId}></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Telefone</label>
              <input className='inputBODH' placeholder={partner.phone}></input>
            </div>
            <div className='fieldBODH'>
              <button className='buttonsaveBODH'>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  function FormCadastroParceiro(){
    return(
      <div className='formModalBODH'>
        <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
        <div className='fieldsetModalBODH'>
          <h1 className='titleModalBODH'>Atualizar Parceiro</h1>
          <form>
            <div className='fieldBODH'>
              <label className='labelBODH'>Nome Parceiro</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>CNPJ</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Telefone</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <button className='buttonsaveBODH'>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  function FormUpdateProduto(){
    return(
      <div className='formModalBODH'>
        <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
        <div className='fieldsetModalBODH'>
          <h1 className='titleModalBODH'>Atualizar Produto</h1>
          <form>
            <div className='fieldBODH'>
              <label className='labelBODH'>Categoria</label>
              <select value={product.category.categoryId}>
                <option value={product.category.categoryId}>{product.category.nomeCategoria}</option>
                {listCategories.map((category) => 
                <option value={category.categoryId}>{category.nomeCategoria}</option>
                )}
              </select>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Parceiro</label>
              <select value={product.partnerId.partnerId}>
                <option value={product.partnerId.partnerId}>{product.partnerId.name}</option>
                {listPartner.map((partner) => 
                <option value={partner.partnerId}>{partner.name}</option>
                )}
              </select>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Link</label>
              <input className='inputBODH' placeholder={product.linkTrackeado}></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Descrição</label>
              <input className='inputBODH' placeholder={product.descricao}></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Arte</label>
              <input className='inputBODH' type='file'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Nome</label>
              <input className='inputBODH' placeholder={product.productName}></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Tipo</label>
              <select defaultValue={product.type}>
              <option value='produtoCat'>Produto de categoria</option>
                <option value='banner'>banner</option>
              </select>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Ativo</label>
              <select defaultValue={product.ativo}>
                <option value={true}>Verdadeiro</option>
                <option value={false}>False</option>
              </select>
            </div>
            <div className='fieldBODH'>
              <button className='buttonsaveBODH'>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  function FormCadastroCategoria(){
    return(
      <div className='formModalBODH'>
        <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
        <div className='fieldsetModalBODH'>
          <h1 className='titleModalBODH'>Cadastro Categoria</h1>
          <form>
            <div className='fieldBODH'>
              <label className='labelBODH'>Nome Categoria</label>
              <input 
                    className='inputBODH'                             
                    type="text"
                    id="nome"
                    name="nome" 
                    value={nomeCategoriaReg} 
                    onChange={(e) => setNomeCategoriaReg(e.target.value)}>
              </input>
            </div>
            <div className='fieldBODH'>
              <button className='buttonsaveBODH' onClick={() => alert(nomeCategoriaReg)}>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  function FormCadastroProduto(){
    return(
      <div className='formModalBODH'>
        <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
        <div className='fieldsetModalBODH'>
          <h1 className='titleModalBODH'>Atualizar Produto</h1>
          <form>
            <div className='fieldBODH'>
              <label className='labelBODH'>Categoria</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Parceiro</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Link</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Descrição</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Arte</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Nome</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <label className='labelBODH'>Tipo</label>
              <input className='inputBODH'></input>
            </div>
            <div className='fieldBODH'>
              <button className='buttonsaveBODH'>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className='containerPrincipal'>
      <div className='positionNavLateral'>
        <NavLateral />
      </div>
      <div className='positionNavSuperior'>
        <NavSuperior />
      </div>
      <div className='contentContainerBODH'>
        <div className='containerBODH' id='categorias'>
          <div className='headerBODH'>
              <h1>Categorias</h1>
              <div className='buttonBODH'><span className='textButtonBODH' onClick={() => setShow('cadastroCategorias')} style={{color: 'white'}}>Criar nova categoria</span></div>
          </div>
          {show == 'cadastroCategorias' && (<FormCadastroCategoria />)}
          <div className='relativeContainer'>
            <div className='cardContainer'>
              {listCategories.map((category) => 
                <div className='cardBODH'>
                  <h1>{category.nomeCategoria}</h1>
                </div>
                )}
            </div>
          </div>
        </div>
        <div className='containerBODH'>
          <div className='headerBODH'>
                <h1>Parceiros</h1>
                <div className='buttonBODH'><span className='textButtonBODH' onClick={() => setShow('cadastroParceiros')} style={{color: 'white'}}>Criar novo parceiro</span></div>
            </div>
            {show == 'updateParceiros' && (<FormUpdateParceiro />)}
            {show == 'cadastroParceiros' && (<FormCadastroParceiro />)}
            <div className='relativeContainer'>
              <div className='cardContainer'>
                {listPartner.map((partner) => 
                  <div className='cardBODH' onClick={() => {getParceiroById(partner.partnerId); setShow('updateParceiros')}}>
                    <h1>{partner.name}</h1>
                  </div>
                )}
              </div>
          </div>
        </div>
        <div className='containerBODH'>
          <div className='headerBODH'>
                  <h1>Produtos</h1>
                  <div className='buttonBODH'><span className='textButtonBODH' onClick={() => setShow('cadastroProdutos')} style={{color: 'white'}}>Criar novo produto</span></div>
              </div>
              {show == 'cadastroProdutos' && (<FormCadastroProduto />)}
              {show == 'updateProdutos' && (<FormUpdateProduto />)}
              <div className='relativeContainer'>
                <div className='cardContainer'>
                  {listProducts.map((product) => 
                    <div className='cardBODH'>
                      <img className='imgcardBODH' src={product.linkImagemProdutoCard}></img>
                      <div className='descProdutosBODH' onClick={async() => {console.log(listCategories); await getProdutoById(product.productId); setShow('updateProdutos')}}>
                        <span className='textProdutoNomeBODH'>{product.productName}</span>
                        <span className='textProdutoBODH'>{product.category.nomeCategoria}</span>
                        <span>{product.ativo == true ? (<AiFillCheckCircle className='iconBODH' />) : (<AiFillCloseCircle className='iconBODH' />)}</span>
                      </div>
                    </div>
                  )}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DeltaHubBackOffice };