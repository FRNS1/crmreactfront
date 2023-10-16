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
  // Registro de Parceiro
  const [nomeParcReg, setNomeParcReg] = useState('');
  const [cnpjParcReg, setCnpjParcReg] = useState('');
  const [phoneParcReg, setPhoneParcReg] = useState('');

  const nomeParcRegChange = (value) => {
    setNomeParcReg(value);
    console.log(nomeParcReg);
  }

  // Registro Produto
  const [fileReg, setFileReg] = useState('');
  const [linkReg, setLinkReg] = useState('');
  const [productNameReg, setProductNameReg] = useState('');
  const [descricaoReg, setDescricaoReg] = useState('');
  const [partnerIdReg, setPartnerIdReg] = useState('');
  const handlePartnerIdReg = (value) => {
    alert('Chamei partner');
    setPartnerIdReg(value);
    alert(partnerIdReg);
  }
  const [typeReg, setTypeReg] = useState('');
  const [categoriaReg, setCategoriaReg] = useState('');
  const handleCategoriaReg = (value) => {
    alert('Chamei categoria');
    setCategoriaReg(value);
    alert(categoriaReg);
  }
  const [fileArteReg, setFileArteReg] = useState([]);
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

  async function registerCategory() {
    try {
      console.log(tokenHub);
      const response = await axios.post(
        "https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/category/register",
        {
          nomeCategoria: nomeCategoriaReg
        },
        {
          headers: {
            Authorization: `Bearer ${tokenHub}`
          }
        }
      );
  
      if (response.status === 200) {
        alert("Categoria cadastrada com sucesso!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function registerParceiro(){
    try {
      const response = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/partner/register", {
        title: nomeParcReg,
        taxId: cnpjParcReg,
        phone: phoneParcReg
      }, {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      } 
      );
      if (response.status == 200) {
        alert("Parceiro cadastrado com sucesso!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function registerProduto(){
    try {
      console.log("Enviando");
      const formData = new FormData();
      formData.append("file", fileArteReg[0]);

      const responseUpload = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/fileupload", formData, {
        headers: {
          Authorization: `Bearer ${tokenHub}`,
          "Content-Type": "multipart/form-data",
        }
      }
      );
      if (responseUpload.status == 201) {
        try {
          console.log("Cadastrando produto")
          console.log(linkReg, productNameReg, descricaoReg, partnerIdReg, categoriaReg, typeReg)
          const responseProduct = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/register", {
            linkTrackeado: linkReg,
            productName: productNameReg,
            descricao: descricaoReg,
            partnerId: partnerIdReg,
            category: categoriaReg,
            type: typeReg
          }, {
            headers: {
              Authorization: `Bearer ${tokenHub}`
            }
          });
          if (responseProduct.status == 201) {
            alert("Produto cadastrado com sucesso!")
            setShow('');
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
      alert(id);
      const responseUpdateParceiro = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/partner/update", {
        id: id,
        title: nomeParceiroUp,
        taxId: cnpjParceiroUp,
        phone: phoneUp
      },
      {
        headers: {
          Authorization: `Bearer ${tokenHub}`
        }
      } 
      );
      if (responseUpdateParceiro == 200){
        alert("Parceiro atualizado com sucesso!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduto(id) {
      try {
        const responseUpdateProduto = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/product/update", {
          id: id,
          categoria: categoriaProdUp,
          parceiro: parceiroProdUp,
          link: linkProdUp,
          descricao: descProdUp,
          nome: nomeProdUp,
          tipo: tipoProdUp,
          ativo: ativoProdUp
        }, {
          headers: {
            Authorization: `Bearer ${tokenHub}`
          }
        }
        );
        if (responseUpdateProduto.status == 200){
          alert("Produto atualizado com sucesso!");
        }
      } catch(error) {
        console.log(error);
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
          {show == 'cadastroCategorias' && (
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
                       <div className='buttonsaveBODH' onClick={() => registerCategory()}>Salvar</div>
                     </div>
                   </form>
                 </div>
               </div>
          )}
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
            {show == 'updateParceiros' && (
              <div className='formModalBODH'>
              <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
              <div className='fieldsetModalBODH'>
                <h1 className='titleModalBODH'>Atualizar Parceiro</h1>
                <form>
                  <div className='fieldBODH'>
                    <label className='labelBODH'>Nome Parceiro</label>
                    <input className='inputBODH' placeholder={partner.name} onChange={(e) => setParceiroUp(e.target.value)}></input>
                  </div>
                  <div className='fieldBODH'>
                    <label className='labelBODH'>CNPJ</label>
                    <input className='inputBODH' placeholder={partner.taxId} onChange={(e) => setCnpjParceiroUp(e.target.value)}></input>
                  </div>
                  <div className='fieldBODH'>
                    <label className='labelBODH'>Telefone</label>
                    <input className='inputBODH' placeholder={partner.phone} onChange={(e) => setPhoneUp(e.target.value)}></input>
                  </div>
                  <div className='fieldBODH'>
                    <div className='buttonsaveBODH' onClick={() => updateParceiro(partner.partnerId)}>Salvar</div>
                  </div>
                </form>
              </div>
            </div>
            )}
            {show == 'cadastroParceiros' && (
                    <div className='formModalBODH'>
                    <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
                    <div className='fieldsetModalBODH'>
                      <h1 className='titleModalBODH'>Atualizar Parceiro</h1>
                      <form>
                        <div className='fieldBODH'>
                          <label className='labelBODH'>Nome Parceiro</label>
                          <input className='inputBODH' value={nomeParcReg} onChange={(e) => nomeParcRegChange(e.target.value)}></input>
                        </div>
                        <div className='fieldBODH'>
                          <label className='labelBODH'>CNPJ</label>
                          <input className='inputBODH' value={cnpjParcReg} onChange={(e) => setCnpjParcReg(e.target.value)}></input>
                        </div>
                        <div className='fieldBODH'>
                          <label className='labelBODH'>Telefone</label>
                          <input className='inputBODH' value={phoneParcReg} onChange={(e) => setPhoneParcReg(e.target.value)}></input>
                        </div>
                        <div className='fieldBODH'>
                          <div className='buttonsaveBODH' onClick={() => registerParceiro()}>Salvar</div>
                        </div>
                      </form>
                    </div>
                  </div>
            )}
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
              {show == 'cadastroProdutos' && (
                      <div className='formModalBODH'>
                      <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
                      <div className='fieldsetModalBODH'>
                        <h1 className='titleModalBODH'>Cadastrar Produto</h1>
                        <form>
                          <div className='fieldBODH'>
                            <label className='labelBODH'>Categoria</label>
                            <select className='inputBODH' onChange={(e) => handleCategoriaReg(e.target.value)}>
                            <option value=''> </option>
                              {listCategories.map((category) => 
                                <option value={category.categoryId}>{category.nomeCategoria}</option>
                              )}
                            </select>
                          </div>
                          <div className='fieldBODH'>
                            <label className='labelBODH'>Parceiro</label>
                            <select className='inputBODH' onChange={(e) => handlePartnerIdReg(e.target.value)}>
                            <option value=''> </option>
                              {listPartner.map((partner) => 
                                <option value={partner.partnerId}>{partner.name}</option>
                              )}
                            </select>
                          </div>
                          <div className='fieldBODH'>
                            <label className='labelBODH'>Link</label>
                            <input className='inputBODH' value={linkReg} onChange={(e) => setLinkReg(e.target.value)}></input>
                          </div>
                          <div className='fieldBODH'>
                            <label className='labelBODH'>Descrição</label>
                            <input className='inputBODH' value={descricaoReg} onChange={(e) => setDescricaoReg(e.target.value)}></input>
                          </div>
                          <div className='fieldBODH'>
                            <label className='labelBODH'>Arte</label>
                            <input className='inputBODH' type='file' onChange={(e) => setFileArteReg(e.target.files)}></input>
                          </div>
                          <div className='fieldBODH'>
                            <label className='labelBODH'>Nome</label>
                            <input className='inputBODH' value={productNameReg} onChange={(e) => setProductNameReg(e.target.value)}></input>
                          </div>
                          <div className='fieldBODH'>
                            <label className='labelBODH'>Tipo</label>
                            <input className='inputBODH' value={typeReg} onChange={(e) => setTypeReg(e.target.value)}></input>
                          </div>
                          <div className='fieldBODH'>
                            <div className='buttonsaveBODH' onClick={() => registerProduto()}>Salvar</div>
                          </div>
                        </form>
                      </div>
                    </div>
              )}
              {show == 'updateProdutos' && (
                <div className='formModalBODH'>
                <AiFillCloseCircle className='iconFormBODH' onClick={() => setShow('')} />
                <div className='fieldsetModalBODH'>
                  <h1 className='titleModalBODH'>Atualizar Produto</h1>
                  <form>
                    <div className='fieldBODH'>
                      <label className='labelBODH'>Categoria</label>
                      <select value={product.category.categoryId} onChange={(e) => setCategoriaProdUp(e.target.value)}>
                        <option value={product.category.categoryId}>{product.category.nomeCategoria}</option>
                        {listCategories.map((category) => 
                        <option value={category.categoryId}>{category.nomeCategoria}</option>
                        )}
                      </select>
                    </div>
                    <div className='fieldBODH'>
                      <label className='labelBODH'>Parceiro</label>
                      <select value={product.partnerId.partnerId} onChange={(e) => setParceiroUp(e.target.value)}>
                        <option value={product.partnerId.partnerId}>{product.partnerId.name}</option>
                        {listPartner.map((partner) => 
                        <option value={partner.partnerId}>{partner.name}</option>
                        )}
                      </select>
                    </div>
                    <div className='fieldBODH'>
                      <label className='labelBODH'>Link</label>
                      <input className='inputBODH' onChange={(e) => setLinkProdUp(e.target.value)} placeholder={product.linkTrackeado}></input>
                    </div>
                    <div className='fieldBODH'>
                      <label className='labelBODH'>Descrição</label>
                      <input className='inputBODH' onChange={(e) => setDescProdUp(e.target.value)} placeholder={product.descricao}></input>
                    </div>
                    <div className='fieldBODH'>
                      <label className='labelBODH'>Nome</label>
                      <input className='inputBODH' onChange={(e) => setNomeProdUp(e.target.value)} placeholder={product.productName}></input>
                    </div>
                    <div className='fieldBODH'>
                      <label className='labelBODH'>Tipo</label>
                      <select defaultValue={product.type} onChange={(e) => setTipoProdUp(e.target.value)}>
                      <option value='produtoCat'>Produto de categoria</option>
                        <option value='banner'>banner</option>
                      </select>
                    </div>
                    <div className='fieldBODH'>
                      <label className='labelBODH'>Ativo</label>
                      <select defaultValue={product.ativo} onChange={(e) => setAtivoProdUp(e.target.value)}>
                        <option value={true}>Verdadeiro</option>
                        <option value={false}>False</option>
                      </select>
                    </div>
                    <div className='fieldBODH'>
                      <div className='buttonsaveBODH' onClick={() => updateProduto(product.productId)}>Salvar</div>
                    </div>
                  </form>
                </div>
              </div>
              )}
              <div className='relativeContainer'>
                <div className='cardContainer'>
                  {listProducts.map((product) => 
                    <div className='cardBODH'>
                      <img className='imgcardBODH' src={product.linkImagemProdutoDesc}></img>
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