import React from "react";
import Modal from "react-modal";

import closeImg from "../../../../src/imgs/close.svg";

export default function NewModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      {props.children}
    </Modal>
  );
}
