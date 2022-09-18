import { node } from 'prop-types';
import React from 'react';

function ModalBody({ children }) {
  return (
    <section className="modal-box__body">
      {children}
    </section>
  );
}

ModalBody.propTypes = {
  children: node.isRequired,
};

export default ModalBody;
