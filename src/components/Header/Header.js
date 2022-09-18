import React from 'react';
import { func } from 'prop-types';

import HeaderLogo from './HeaderLogo';
import HeaderNavbar from './HeaderNavbar';

import '../../styles/header.css';

function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <HeaderLogo />
        <HeaderNavbar onLogout={onLogout} />
      </div>
    </header>
  );
}

Header.propTypes = {
  onLogout: func.isRequired,
};

export default Header;
