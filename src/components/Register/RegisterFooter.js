import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LocaleContext from '../../contexts/LocaleContext';
import AuthFooter from '../Auth/AuthFooter';

function RegisterFooter() {
  const { getString } = useContext(LocaleContext);

  return (
    <AuthFooter>
      <p className="auth__footer-text">
        {getString(4)}
        &nbsp;
        <Link
          className="link auth__footer-link"
          to="/"
          title={getString(6)}
        >
          {getString(5)}
        </Link>
      </p>
    </AuthFooter>
  );
}

export default RegisterFooter;
