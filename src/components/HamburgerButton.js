import React from 'react';
import { bool, string } from 'prop-types';

import '../styles/hamburger-button.css';

function HamburgerButton({
  className = '', isTransformed = false, ...otherProps
}) {
  return (
    <button
      className={`button hamburger-button ${isTransformed ? 'hamburger-button--transformed' : ''} ${className}`}
      {...otherProps}>
        <div className="hamburger-button__line"></div>
        <div className="hamburger-button__line"></div>
        <div className="hamburger-button__line"></div>
    </button>
  );
}

HamburgerButton.prototype = {
  className: string,
  isTransformed: bool,
};

export default HamburgerButton;
