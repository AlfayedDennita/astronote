import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderNavbar from './HeaderNavbar';

import '../../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <HeaderLogo />
        <HeaderNavbar />
      </div>
    </header>
  );
}

export default Header;
