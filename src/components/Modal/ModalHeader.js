import React, { useContext } from 'react';
import { elementType, func, string } from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

import LocaleContext from '../../contexts/LocaleContext';
import ActionButton from '../ActionButton';

function ModalHeader({ Icon, title, onCloseButtonClick }) {
  const { getString } = useContext(LocaleContext);

  return (
    <header className="modal-box__header">
      <Icon className="modal-box__icon" />
      <h2 className="modal-box__title">{title}</h2>
      <ActionButton
        className="modal-box__close-button"
        title={getString(57)}
        onClick={onCloseButtonClick}
      >
        <AiOutlineClose className="modal-box__close-icon" />
      </ActionButton>
    </header>
  );
}

ModalHeader.propTypes = {
  Icon: elementType.isRequired,
  title: string.isRequired,
  onCloseButtonClick: func.isRequired,
};

export default ModalHeader;
