import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillCloseCircle } from 'react-icons/ai';
import Cookies from 'js-cookie';

function FormCadastroCategoriaDH(){
    const [nomeCategoriaReg, setNomeCategoriaReg] = useState('');
    const [show, setShow] = useState('');
    const [tokenHub, setTokenHub] = useState('');
    async function registerCategory(){
        try {
          const response = await axios.post("https://api-deltahub-df3c67cdaa69.herokuapp.com/api/v1/category/register", {
            headers: {
              Authorization: `Bearer ${Cookies.get('tokenHub')}`
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
      return(
        <>
        {show == 'show' ? (
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
        ):null}
        </>
      )
}

export { FormCadastroCategoriaDH };