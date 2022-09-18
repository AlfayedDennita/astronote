import React from 'react';
import { bool, func, string } from 'prop-types';

import NoteCardContent from './NoteCardContent';
import NoteCardActions from './NoteCardActions';

import '../../styles/note-card.css';

function NoteCard({
  className, id, title, body, createdDate, isArchived, refreshNotes,
}) {
  return (
    <article className={`note-card ${className}`}>
      <NoteCardContent
        id={id}
        title={title}
        createdDate={createdDate}
        body={body}
      />
      <NoteCardActions
        id={id}
        title={title}
        isArchived={isArchived}
        refreshNotes={refreshNotes}
      />
    </article>
  );
}

NoteCard.propTypes = {
  className: string,
  id: string.isRequired,
  title: string.isRequired,
  body: string.isRequired,
  createdDate: string.isRequired,
  isArchived: bool.isRequired,
  refreshNotes: func.isRequired,
};

NoteCard.defaultProps = {
  className: '',
};

export default NoteCard;
