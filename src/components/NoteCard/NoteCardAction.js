import React from 'react';
import {
  bool, elementType, func, string,
} from 'prop-types';

import ActionButton from '../ActionButton';

function NoteCardAction({
  to, onClick, Icon, title, isDanger,
}) {
  return (
    <ActionButton
      className={`note-card__action ${isDanger ? 'note-card__action--danger' : ''}`}
      {...{ to, onClick, title }}
    >
      <Icon className="note-card__action-icon" />
    </ActionButton>
  );
}

NoteCardAction.propTypes = {
  to: string,
  onClick: func,
  Icon: elementType.isRequired,
  title: string.isRequired,
  isDanger: bool,
};

NoteCardAction.defaultProps = {
  to: null,
  onClick: null,
  isDanger: false,
};

export default NoteCardAction;
