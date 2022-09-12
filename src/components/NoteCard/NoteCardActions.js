import React from 'react';
import { bool, func, string } from 'prop-types';
import { AiFillFolder, AiFillEdit, AiFillRest, AiFillFolderOpen } from 'react-icons/ai';

import { archiveNote, unarchiveNote, deleteNote } from '../../utils/local-data';

import NoteCardAction from './NoteCardAction';

function NoteCardActions({ id, title, isArchived, refreshNotes }) {
  function onArchiveButtonClickHandler() {
    isArchived ? unarchiveNote(id) : archiveNote(id);
    refreshNotes();
  }

  function onDeleteButtonClickHandler() {
    const isAgreed = window.confirm(`Are you sure to delete "${title}" note?`);
    isAgreed && deleteNote(id);
    refreshNotes();
  }

  const variants = {
    archiveButton: {
      title: isArchived ? 'Remove Note from Archives' : 'Add Note to Archives',
      Icon: isArchived ? AiFillFolderOpen : AiFillFolder,
    }
  };

  return (
    <ul className="note-card__actions">
      <li>
        <NoteCardAction
          type="button"
          Icon={variants.archiveButton.Icon}
          title={variants.archiveButton.title}
          onClick={onArchiveButtonClickHandler} />
      </li>
      <li>
        <NoteCardAction
          type="link"
          Icon={AiFillEdit}
          title="Edit Note"
          to={`/notes/edit/${id}`} />
      </li>
      <li>
        <NoteCardAction
          type="button"
          Icon={AiFillRest}
          title="Delete Note"
          isDanger
          onClick={onDeleteButtonClickHandler} />
      </li>
    </ul>
  );
}

NoteCardActions.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  isArchived: bool.isRequired,
  refreshNotes: func.isRequired,
};

export default NoteCardActions;
