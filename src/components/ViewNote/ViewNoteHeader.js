import React from 'react';
import { bool, func, string } from 'prop-types';

import { formatDate } from '../../utils';

import ViewNoteActions from './ViewNoteActions';

function ViewNoteHeader({
  id, title, createdDate, isArchived, onArchiveButtonClick, onDeleteButtonClick,
}) {
  return (
    <header className="view-note-page__header">
      <h2 className="view-note-page__heading">{title}</h2>
      <time className="view-note-page__date" dateTime={createdDate}>
        {formatDate(createdDate)}
      </time>
      <ViewNoteActions
        id={id}
        isArchived={isArchived}
        onArchiveButtonClick={onArchiveButtonClick}
        onDeleteButtonClick={onDeleteButtonClick} />
    </header>
  );
}

ViewNoteHeader.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  createdDate: string.isRequired,
  isArchived: bool.isRequired,
  onArchiveButtonClick: func.isRequired,
  onDeleteButtonClick: func.isRequired,
};

export default ViewNoteHeader;
