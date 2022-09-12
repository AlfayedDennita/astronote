import React from 'react';
import { bool, elementType, oneOf } from 'prop-types';

import ActionButton from '../ActionButton';

function NoteCardAction({
  type, Icon, isDanger = false, ...otherProps
}) {
  return (
    <ActionButton
      className={`note-card__action ${isDanger ? 'note-card__action--danger' : ''}`}
      type={type}
      {...otherProps}>
        <Icon className="note-card__action-icon" />
    </ActionButton>
  );
}

NoteCardAction.propTypes = {
  type: oneOf(['link', 'button']).isRequired,
  Icon: elementType.isRequired,
  isDanger: bool,
};

export default NoteCardAction;
