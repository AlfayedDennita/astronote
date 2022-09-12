import React from 'react';
import { bool, elementType, oneOf, string } from 'prop-types';

import ActionButton from '../ActionButton';

function ViewNoteAction({
  type, Icon, text, isDanger = false, ...otherProps
}) {
  return (
    <ActionButton
      className={`view-note-page__action ${isDanger ? 'view-note-page__action--danger' : ''}`}
      type={type}
      {...otherProps}>
        <Icon className="view-note-page__action-icon" />{text}
    </ActionButton>
  );
}

ViewNoteAction.propTypes = {
  type: oneOf(['link', 'button']).isRequired,
  Icon: elementType.isRequired,
  text: string.isRequired,
  isDanger: bool,
};

export default ViewNoteAction;
