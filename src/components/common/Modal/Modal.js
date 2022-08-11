import React from "react";
import { Modal } from 'react-bootstrap';
import './Modal.scss';

const CustomModal = (props) => {

  const handleClose = () => {
    props.onClose && props.onClose(false)
  };

  return (
    <Modal className="themeModal" show={true} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;