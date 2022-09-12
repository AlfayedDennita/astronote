import React from 'react';
import { elementType, oneOf, string } from 'prop-types';

import ActionButton from '../ActionButton';

function HeaderNavbarItem({
  type, Icon, text, ...otherProps
}) {
  return (
    <li className="header__navbar-item">
      <ActionButton
        className="header__navbar-action"
        type={type}
        title={text}
        {...otherProps}>
          <Icon className="header__navbar-action-icon" />{text}
      </ActionButton>
    </li>
  );
}

HeaderNavbarItem.propTypes = {
  type: oneOf(['link', 'button']).isRequired,
  Icon: elementType.isRequired,
  text: string.isRequired,
};

export default HeaderNavbarItem;
