import React from 'react';
import { bool, func, string } from 'prop-types';

import '../styles/hamburger-button.css';

function HamburgerButton({
  className, title, isTransformed, onClick,
}) {
  return (
    <button
      className={`button hamburger-button ${isTransformed ? 'hamburger-button--transformed' : ''} ${className}`}
      type="button"
      {...{ title, onClick }}
    >
      <div className="hamburger-button__line" />
      <div className="hamburger-button__line" />
      <div className="hamburger-button__line" />
    </button>
  );
}

HamburgerButton.propTypes = {
  className: string,
  title: string.isRequired,
  isTransformed: bool,
  onClick: func.isRequired,
};

HamburgerButton.defaultProps = {
  className: '',
  isTransformed: false,
};

export default HamburgerButton;
