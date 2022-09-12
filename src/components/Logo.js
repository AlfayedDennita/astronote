import React from 'react';
import { oneOf, string } from 'prop-types';

import '../styles/logo.css';

function Logo({ className = '', size }) {
  return (
    <div className={`logo logo--${size} ${className}`}>
        <img
          className={`logo__image logo__image--${size}`}
          src="/images/logo-icon.png"
          alt="" />
        <span className={`logo__text logo__text--${size}`}>
          Astro<span className={`logo__text logo__text--${size} logo__text--highlighted`}>note</span>!
        </span>
    </div>
  );
}

Logo.propTypes = {
  className: string,
  size: oneOf(['small', 'medium', 'large']).isRequired,
};

export default Logo;
