import React, { useContext } from 'react';
import { bool, func, string } from 'prop-types';

import { formatDate } from '../../utils';
import LocaleContext from '../../contexts/LocaleContext';
import ViewNoteActions from './ViewNoteActions';

function ViewNoteHeader({
  title, createdDate, isArchived, onArchiveButtonClick, onDeleteButtonClick,
}) {
  const { locale } = useContext(LocaleContext);

  return (
    <header className="view-note-page__header">
      <h2 className="view-note-page__title">{title}</h2>
      <time className="view-note-page__date" dateTime={createdDate}>
        {formatDate(createdDate, locale)}
      </time>
      <ViewNoteActions
        isArchived={isArchived}
        onArchiveButtonClick={onArchiveButtonClick}
        onDeleteButtonClick={onDeleteButtonClick}
      />
    </header>
  );
}

ViewNoteHeader.propTypes = {
  title: string.isRequired,
  createdDate: string.isRequired,
  isArchived: bool.isRequired,
  onArchiveButtonClick: func.isRequired,
  onDeleteButtonClick: func.isRequired,
};

export default ViewNoteHeader;
