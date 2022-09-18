import {
  bool, func, elementType, string,
} from 'prop-types';
import React from 'react';

import ActionButton from '../ActionButton';

function ModalAction({
  Icon, text, isDanger, onClick,
}) {
  return (
    <ActionButton
      className={`modal-box__action button--padded ${isDanger ? 'modal-box__action--danger' : ''}`}
      title={text}
      {...{ onClick }}
    >
      <Icon className="modal-box__action-icon" />
      {text}
    </ActionButton>
  );
}

ModalAction.propTypes = {
  Icon: elementType.isRequired,
  text: string.isRequired,
  isDanger: bool,
  onClick: func,
};

ModalAction.defaultProps = {
  isDanger: false,
  onClick: null,
};

export default ModalAction;
