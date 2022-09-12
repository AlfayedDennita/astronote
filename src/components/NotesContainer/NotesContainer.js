import React from 'react';
import { arrayOf, func, object, oneOf, string } from 'prop-types';

import NoteCard from '../NoteCard/NoteCard';
import AddNoteButton from './AddNoteButton';

import '../../styles/notes-container.css';

function NotesContainer({ className = '', type, notes, refreshNotes }) {
  const sortedNotes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const variants = {
    unarchived: {
      noNotesFoundText: 'No notes found.',
    },
    archived: {
      noNotesFoundText: 'No archived notes found.',
    },
  };

  const { noNotesFoundText } = variants[type];

  return (
    <section className={`notes-container ${className}`}>
      {type === 'unarchived' && <AddNoteButton />}
      {
        sortedNotes.length > 0
        ? sortedNotes.map((note) => (
            <NoteCard
              key={note.id}
              className="notes-container__card"
              id={note.id}
              title={note.title}
              body={note.body}
              createdDate={note.createdAt}
              isArchived={note.archived}
              refreshNotes={refreshNotes} />
          ))
        : <p className="notes-container__not-found">{noNotesFoundText}</p>
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

export default NotesContainer;
