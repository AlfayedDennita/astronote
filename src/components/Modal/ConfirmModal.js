import React, { useContext } from 'react';
import {
  bool, elementType, func, string,
} from 'prop-types';
import { AiFillWarning, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import LocaleContext from '../../contexts/LocaleContext';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalActions from './ModalActions';
import ModalAction from './ModalAction';

import '../../styles/confirm-modal.css';

function ConfirmModal({
  title, message, ConfirmIcon, confirmText, isDanger, onAgree, onDisagree,
}) {
  const { getString } = useContext(LocaleContext);

  return (
    <div className="confirm-modal">
      <ModalHeader
        Icon={AiFillWarning}
        title={title}
        onCloseButtonClick={onDisagree}
      />
      <ModalBody>
        <p className="confirm-modal__message">{message}</p>
      </ModalBody>
      <ModalActions>
        <ModalAction
          Icon={ConfirmIcon}
          text={confirmText}
          onClick={onAgree}
          {...{ isDanger }}
        />
        <ModalAction
          Icon={AiOutlineClose}
          text={getString(57)}
          onClick={onDisagree}
        />
      </ModalActions>
    </div>
  );
}

ConfirmModal.propTypes = {
  title: string,
  message: string.isRequired,
  ConfirmIcon: elementType,
  confirmText: string,
  isDanger: bool,
  onAgree: func.isRequired,
  onDisagree: func.isRequired,
};

ConfirmModal.defaultProps = {
  title: 'Confirm Dialog',
  ConfirmIcon: AiOutlineCheck,
  confirmText: 'Yes',
  isDanger: false,
};

export default ConfirmModal;
