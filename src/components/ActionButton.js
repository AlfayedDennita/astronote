import React from 'react';
import { func, node, string } from 'prop-types';
import { Link } from 'react-router-dom';

function ActionButton({
  className, to, onClick, title, children,
}) {
  const newClassName = `button ${className}`;

  let action = null;

  if (to !== null && onClick === null) {
    action = (
      <Link
        className={`link ${newClassName}`}
        {...{ title, to }}
      >
        {children}
      </Link>
    );
  }

  if (onClick !== null && to === null) {
    action = (
      <button
        className={newClassName}
        type="button"
        {...{ title, onClick }}
      >
        {children}
      </button>
    );
  }

  return action;
}

ActionButton.propTypes = {
  className: string,
  to: string,
  onClick: func,
  title: string.isRequired,
  children: node.isRequired,
};

ActionButton.defaultProps = {
  className: '',
  to: null,
  onClick: null,
};

export default ActionButton;
