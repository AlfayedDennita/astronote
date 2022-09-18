import React from 'react';
import { string } from 'prop-types';

import '../styles/loading-ripple.css';

function LoadingRipple({ className }) {
  return (
    <div className={`loading-ripple ${className}`}>
      <div className="loading-ripple__circle" />
      <div className="loading-ripple__circle loading-ripple__circle--outer" />
    </div>
  );
}

LoadingRipple.propTypes = {
  className: string,
};

LoadingRipple.defaultProps = {
  className: '',
};

export default LoadingRipple;
