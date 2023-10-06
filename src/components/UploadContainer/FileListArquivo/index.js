import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, FileContent } from './style';

export default function FileListArquivo() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleDeleteFile = (index) => {
    // Implemente a função para remover o arquivo da lista selectedFiles
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
    <Container>
      <li>
        <FileInfo>
          <div>
            {selectedFiles.map((file, index) => (
              <div key={index}>
                <strong>{file.name}</strong>
                <span>{file.size} <button onClick={() => handleDeleteFile(index)}>Excluir</button></span>
              </div>
            ))}
          </div>
        </FileInfo>

        <FileContent>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: '#7159c1' },
            }}
            strokeWidth={10}
            percentage={60}
          />

          <a href="/" target="_blank" rel="noopener noreferrer">
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>
          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#e57878" />
        </FileContent>
      </li>
    </Container>
  );
}
