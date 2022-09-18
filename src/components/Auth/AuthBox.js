import React from 'react';
import { node } from 'prop-types';

import '../../styles/auth.css';

function AuthBox({ children }) {
  return (
    <div className="wrapper wrapper--sm auth">
      <div className="auth__box">
        {children}
      </div>
    </div>
  );
}

AuthBox.propTypes = {
  children: node.isRequired,
};

export default AuthBox;
