import React from 'react';
import {
  bool, elementType, func, string,
} from 'prop-types';

import ActionButton from '../ActionButton';

function HeaderNavbarItem({
  to, onClick, Icon, imageUrl, text, isDanger,
}) {
  let iconElement = null;

  if (imageUrl !== null) {
    iconElement = <img className="header__navbar-action-image" src={imageUrl} alt="" />;
  }

  if (Icon !== null) {
    iconElement = <Icon className="header__navbar-action-icon" />;
  }

  return (
    <li className="header__navbar-item">
      <ActionButton
        className={`header__navbar-action ${isDanger ? 'header__navbar-action--danger' : ''}`}
        title={text}
        {...{ to, onClick }}
      >
        {iconElement}
        {text}
      </ActionButton>
    </li>
  );
}

HeaderNavbarItem.propTypes = {
  to: string,
  onClick: func,
  Icon: elementType,
  imageUrl: string,
  text: string.isRequired,
  isDanger: bool,
};

HeaderNavbarItem.defaultProps = {
  to: null,
  onClick: null,
  Icon: null,
  imageUrl: null,
  isDanger: false,
};

export default HeaderNavbarItem;
