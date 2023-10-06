import React, { Component } from "react";

import { Container, Content } from "./style";

import Upload from "./Upload/uploadFiles";
import FileList from "./FileListArquivo";

export default class UploadContainer extends Component {
  render() {
    const { onUpload, uploadedFiles, processUpload, onDelete } = this.props;

    return (
      <Container>
        <Content>
          {!uploadedFiles || uploadedFiles.length === 0 ? (
            <Upload onUpload={onUpload} />
          ) : (
            <FileList
              files={uploadedFiles}
              processUpload={processUpload}
              onDelete={onDelete}
            />
          )}
        </Content>
      </Container>
    );
  }
}
