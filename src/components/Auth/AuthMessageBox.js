import React from 'react';
import { oneOf, string } from 'prop-types';

import { AiFillInfoCircle } from 'react-icons/ai';

function AuthMessageBox({ type, text }) {
  return (
    <div className={`auth__message-box auth__message-box--${type}`}>
      <AiFillInfoCircle className="auth__message-icon" />
      <p className="auth__message-text">{text}</p>
    </div>
  );
}

AuthMessageBox.propTypes = {
  type: oneOf(['success', 'danger']).isRequired,
  text: string.isRequired,
};

export default AuthMessageBox;
