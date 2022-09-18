import React, { useState, useContext } from 'react';
import { func } from 'prop-types';

import LocaleContext from '../../contexts/LocaleContext';
import HamburgerButton from '../HamburgerButton';
import HeaderNavbarList from './HeaderNavbarList';

function HeaderNavbar({ onLogout }) {
  const { getString } = useContext(LocaleContext);
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const onOpenMobileNavbarHandler = () => {
    setIsMobileNavbarOpen((prevState) => !prevState);
  };

  return (
    <nav className="header__navbar">
      <HamburgerButton
        className="header__hamburger-button"
        isTransformed={isMobileNavbarOpen}
        title={isMobileNavbarOpen ? getString(26) : getString(25)}
        onClick={onOpenMobileNavbarHandler}
      />
      <HeaderNavbarList
        isOpenOnMobile={isMobileNavbarOpen}
        onLogout={onLogout}
      />
    </nav>
  );
}

HeaderNavbar.propTypes = {
  onLogout: func.isRequired,
};

export default HeaderNavbar;
