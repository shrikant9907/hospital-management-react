import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import './Modal.scss';

const CustomModal = (props) => {

  const { title } = props;
 
  const handleClose = () => {
    props.onClose && props.onClose(false)
  }; 

  return (
    <React.Fragment>

      <Modal className="themeModal" show={true} onHide={handleClose}>

        <Modal.Header closeButton>
          {
            title &&
            <Modal.Title>{title}</Modal.Title>
          }
        </Modal.Header>

        <Modal.Body>{props.children}</Modal.Body>

        <Modal.Footer>
          <Button variant="outline-primary" onClick={() => handleClose()}>Close</Button>
          <Button variant="primary" onClick={() => handleClose()} >Ok</Button>
        </Modal.Footer>

      </Modal>

    </React.Fragment>
  );
};

export default CustomModal;