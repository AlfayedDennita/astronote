import React from 'react';
import { bool } from 'prop-types';
import { AiFillHome, AiFillFolder } from 'react-icons/ai';

import HeaderNavbarItem from './HeaderNavbarItem';

function HeaderNavbarList({ isOpenedOnMobile = true }) {
  return (
    <ul className={`header__navbar-list ${isOpenedOnMobile ? 'header__navbar-list--opened' : 'header__navbar-list--closed'}`}>
      <HeaderNavbarItem
        type="link"
        to="/"
        Icon={AiFillHome}
        text="Home" />
      <HeaderNavbarItem
        type="link"
        to="/archives"
        Icon={AiFillFolder}
        text="Archives" />
    </ul>
  );
}

HeaderNavbarList.propTypes = {
  isOpenedOnMobile: bool,
};

export default HeaderNavbarList;
