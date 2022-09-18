import React from 'react';
import { node } from 'prop-types';

function ModalActions({ children }) {
  return (
    <footer className="modal-box__actions">
      {children}
    </footer>
  );
}

ModalActions.propTypes = {
  children: node.isRequired,
};

export default ModalActions;
