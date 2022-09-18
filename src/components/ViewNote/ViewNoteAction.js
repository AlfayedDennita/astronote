import React from 'react';
import {
  bool, elementType, func, string,
} from 'prop-types';

import ActionButton from '../ActionButton';

function ViewNoteAction({
  to, onClick, Icon, text, title, isDanger,
}) {
  return (
    <ActionButton
      className={`view-note-page__action ${isDanger ? 'view-note-page__action--danger' : ''}`}
      {...{ to, onClick, title }}
    >
      <Icon className="view-note-page__action-icon" />
      {text}
    </ActionButton>
  );
}

ViewNoteAction.propTypes = {
  to: string,
  onClick: func,
  Icon: elementType.isRequired,
  text: string.isRequired,
  title: string.isRequired,
  isDanger: bool,
};

ViewNoteAction.defaultProps = {
  to: null,
  onClick: null,
  isDanger: false,
};

export default ViewNoteAction;
