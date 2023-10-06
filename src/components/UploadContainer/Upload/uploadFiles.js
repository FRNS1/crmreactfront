import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import Cookies from 'js-cookie';

import FileListArquivo from '../FileListArquivo';
// import getDataProposal from '../../../js/visualizacaoindividual.js'

import { UploadFiles, DropContainer, UploadMessage, UploadContainer } from './style';

export default function Upload({ onUpload }) {
  const [files, setFiles] = useState([]);

  // Função para renderizar mensagens com base na ação de arrastar e soltar
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arrasta arquivos aqui ...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arrasta não suportado ...</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };

  // async function sendFiles() {
  //   console.log("Enviando");
  //   console.log(files);

  //   for (let i = 0; i < files.length; i++) {
  //       var myHeaders = new Headers();
  //       myHeaders.append("Authorization", `Bearer ${Cookies.get('token')}`);

  //       var formdata = new FormData();
  //       formdata.append("file", files[i]);

  //       var requestOptions = {
  //           method: 'POST',
  //           headers: myHeaders,
  //           body: formdata,
  //           redirect: 'follow'
  //       };

  //       // Upload do arquivo
  //       await fetch("http://35.175.231.117:8080/api/v1/files/upload", requestOptions)
  //           .then(response => response.text())
  //           .then(result => {
  //               console.log("Arquivo enviado:", result)
  //           })
  //           .catch(error => console.log('error', error));

  //       // Construir o link S3
  //       var myHeaders2 = new Headers();
  //       myHeaders2.append("Authorization", `Bearer ${Cookies.get('token')}`);
  //       myHeaders2.append("Content-Type", "application/json");

  //       let fileName = files[i].name.replace(/\s/g, "+");
  //       let link = `https://docsbora.s3.amazonaws.com/${fileName}`;

  //       var data = {
  //           fileName: fileName,
  //           user_id: Cookies.get('userid'),
  //           tipoArquivo: "Documentos do cliente",
  //           proposal: Cookies.get('propostaSelecionada'),
  //           url: link
  //       };

  //       var requestOptionsData = {
  //           method: 'POST',
  //           headers: myHeaders2,
  //           body: JSON.stringify(data),
  //           redirect: 'follow'
  //       };

  //       // Enviar informações sobre o arquivo
  //       await fetch("http://35.175.231.117:8080/api/v1/files/filesdata", requestOptionsData)
  //           .then(response => response.text())
  //           .then(result => { alert("Informações e arquivo enviados"); setFiles([]); getDataProposal(); })
  //           .catch(error => console.log('error', error));
  //   }
  // }
  return (
    <UploadContainer>
      <h2> Faça o upload dos seus documentos </h2>
      
      <UploadFiles>
        <Dropzone accept="images/*" 
          onDropAccepted={onUpload}
        >
          {({ getInputProps, getRootProps, isDragActive, isDragReject }) => (
            <DropContainer className='dropContainer'
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              {renderDragMessage(isDragActive, isDragReject)} 
            </DropContainer>
          )}
        </Dropzone>
        
        <FileListArquivo/>
        <div className='divbotaoEnviarArquivos'>
          <button className='botaoEnviarArquivos'>
            <span className='stringEnviarDados'> Enviar Arquivos </span>
          </button>
        </div>
      </UploadFiles>
    </UploadContainer>
  )
}
