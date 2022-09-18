import React from 'react';
import { bool, node, string } from 'prop-types';
import ReactModal from 'react-modal';

import '../../styles/modal.css';

ReactModal.setAppElement('#root');

function Modal({ isOpen, className, children }) {
  return (
    <ReactModal
      className={`modal-box ${className}`}
      overlayClassName="modal-overlay"
      closeTimeoutMS={250}
      {...{ isOpen }}
    >
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: bool,
  className: string,
  children: node.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
  className: '',
};

export default Modal;
