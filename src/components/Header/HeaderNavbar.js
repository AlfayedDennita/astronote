import React from 'react';
import autoBind from 'auto-bind/react';

import HamburgerButton from '../HamburgerButton';
import HeaderNavbarList from './HeaderNavbarList';

class HeaderNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileNavbarOpened: false,
    };

    autoBind(this);
  }

  onHamburgerButtonClickHandler() {
    this.setState((prevState) => ({
      isMobileNavbarOpened: !prevState.isMobileNavbarOpened,
    }));
  }

  render() {
    return (
      <nav className="header__navbar">
        <HamburgerButton
          className="header__hamburger-button"
          isTransformed={this.state.isMobileNavbarOpened}
          title={this.state.isMobileNavbarOpened ? 'Close Menu' : 'Open Menu'}
          onClick={this.onHamburgerButtonClickHandler} />
        <HeaderNavbarList
          isOpenedOnMobile={this.state.isMobileNavbarOpened} />
      </nav>
    );
  }
}

export default HeaderNavbar;
