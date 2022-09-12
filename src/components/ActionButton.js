import React from 'react';
import { node, oneOf, string } from 'prop-types';
import { Link } from 'react-router-dom';

function ActionButton({ 
  className = '', type, children, ...otherProps
}) {
  const newClassName = `button ${className}`;

  const linkAction = (
    <Link
      className={`link ${newClassName}`}
      {...otherProps}>
        {children}
    </Link>
  );

  const buttonAction = (
    <button
      className={newClassName}
      {...otherProps}>
        {children}
    </button>
  );

  return type === 'link' ? linkAction : buttonAction;
}

ActionButton.propTypes = {
  className: string,
  type: oneOf(['link', 'button']).isRequired,
  children: node.isRequired,
}

export default ActionButton;
