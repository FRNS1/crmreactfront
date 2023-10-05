import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import FileListArquivo from '../FileListArquivo';

import { UploadFiles, DropContainer, UploadMessage, UploadContainer } from './style';

export default function Upload({ onUpload }) {
  // Estado para armazenar os arquivos selecionados ou arrastados
  const [selectedFiles, setSelectedFiles] = useState([]);

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

  return (
    <UploadContainer>
      <h2> Faça o upload dos seus documentos </h2>
      
      <UploadFiles>
        <Dropzone accept="images/*" onDropAccepted={(acceptedFiles) => setSelectedFiles(acceptedFiles)}>
          {({ getInputProps, getRootProps, isDragActive, isDragReject }) => (
            <DropContainer className='dropContainer'
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              {renderDragMessage(isDragActive, isDragReject)} 

              {/* Exiba os nomes dos arquivos selecionados ou arrastados dentro do DropContainer */}
              <div>
                {selectedFiles.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
              </div>
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
