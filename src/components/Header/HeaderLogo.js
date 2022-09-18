import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';

function HeaderLogo() {
  return (
    <h1 className="header__logo">
      <Link
        className="link header__logo-link"
        to="/"
        title="Astronote!"
      >
        <Logo size="medium" />
      </Link>
    </h1>
  );
}

export default HeaderLogo;
