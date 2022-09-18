import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../Logo';

function AuthHeader({ title }) {
  return (
    <header className="auth__header">
      <h1 className="auth__logo">
        <Link
          className="link auth__logo-link"
          to="/"
          title="Astronote!"
        >
          <Logo size="small" />
        </Link>
      </h1>
      <h2 className="auth__title">{title}</h2>
    </header>
  );
}

AuthHeader.propTypes = {
  title: string.isRequired,
};

export default AuthHeader;
