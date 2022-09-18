/* eslint-disable react/forbid-prop-types */

import React, { useContext } from 'react';
import {
  arrayOf, func, object, oneOf, string,
} from 'prop-types';

import LocaleContext from '../../contexts/LocaleContext';
import AddNoteButton from './AddNoteButton';
import NoteCard from '../NoteCard/NoteCard';

import '../../styles/notes-container.css';

function NotesContainer({
  className, type, notes, refreshNotes,
}) {
  const { getString } = useContext(LocaleContext);

  const sortedNotes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const variants = {
    unarchived: {
      noNotesFoundText: getString(40),
    },
    archived: {
      noNotesFoundText: getString(41),
    },
  };

  const { noNotesFoundText } = variants[type];

  return (
    <section className={`notes-container ${className}`}>
      {type === 'unarchived' && <AddNoteButton />}
      {
        sortedNotes.length > 0 ? sortedNotes.map((note) => (
          <NoteCard
            key={note.id}
            className="notes-container__card"
            id={note.id}
            title={note.title}
            body={note.body}
            createdDate={note.createdAt}
            isArchived={note.archived}
            refreshNotes={refreshNotes}
          />
        )) : <p className="notes-container__not-found">{noNotesFoundText}</p>
      }
    </section>
  );
}

NotesContainer.propTypes = {
  className: string,
  type: oneOf(['unarchived', 'archived']).isRequired,
  notes: arrayOf(object).isRequired,
  refreshNotes: func.isRequired,
};

NotesContainer.defaultProps = {
  className: '',
};

export default NotesContainer;
