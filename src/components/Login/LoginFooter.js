import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LocaleContext from '../../contexts/LocaleContext';
import AuthFooter from '../Auth/AuthFooter';

function LoginFooter() {
  const { getString } = useContext(LocaleContext);

  return (
    <AuthFooter>
      <p className="auth__footer-text">
        {getString(18)}
        &nbsp;
        <Link
          className="link auth__footer-link"
          to="/register"
          title={getString(15)}
        >
          {getString(19)}
        </Link>
      </p>
    </AuthFooter>
  );
}

export default LoginFooter;
