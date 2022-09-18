import React, { useContext } from 'react';
import { bool, func } from 'prop-types';
import {
  AiFillHome, AiFillFolder, AiFillBulb, AiOutlineBulb, AiOutlineLogout,
} from 'react-icons/ai';

import LocaleContext from '../../contexts/LocaleContext';
import ThemeContext from '../../contexts/ThemeContext';
import HeaderNavbarItem from './HeaderNavbarItem';

function HeaderNavbarList({ isOpenOnMobile, onLogout }) {
  const { locale, toggleLocale, getString } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ul className={`header__navbar-list ${isOpenOnMobile ? 'header__navbar-list--open' : 'header__navbar-list--close'}`}>
      <HeaderNavbarItem
        to="/"
        Icon={AiFillHome}
        text={getString(27)}
      />
      <HeaderNavbarItem
        to="/archives"
        Icon={AiFillFolder}
        text={getString(28)}
      />
      <HeaderNavbarItem
        onClick={toggleLocale}
        imageUrl={locale === 'en' ? '/images/en-icon.png' : '/images/id-icon.png'}
        text={`${getString(29)}: ${locale === 'en' ? 'English' : 'Indonesia'}`}
      />
      <HeaderNavbarItem
        onClick={toggleTheme}
        Icon={theme === 'light' ? AiOutlineBulb : AiFillBulb}
        text={`${getString(30)}: ${theme === 'light' ? getString(32) : getString(33)}`}
      />
      <HeaderNavbarItem
        onClick={onLogout}
        Icon={AiOutlineLogout}
        text={getString(31)}
        isDanger
      />
    </ul>
  );
}

HeaderNavbarList.propTypes = {
  isOpenOnMobile: bool,
  onLogout: func.isRequired,
};

HeaderNavbarList.defaultProps = {
  isOpenOnMobile: true,
};

export default HeaderNavbarList;
