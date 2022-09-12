import React from 'react';
import { bool, func, string } from 'prop-types';
import { AiFillFolder, AiFillFolderOpen, AiFillEdit, AiFillRest } from 'react-icons/ai';

import ViewNoteAction from './ViewNoteAction';

function ViewNoteActions({
  id, isArchived, onArchiveButtonClick, onDeleteButtonClick,
}) {
  const variants = {
    archiveButton: {
      Icon: isArchived ? AiFillFolderOpen : AiFillFolder,
      text: isArchived ? 'Remove from Archive' : 'Add to Archive',
    },
  };

  return (
    <ul className="view-note-page__actions">
      <li>
        <ViewNoteAction
          type="button"
          Icon={variants.archiveButton.Icon}
          text={variants.archiveButton.text}
          title={variants.archiveButton.text}
          onClick={onArchiveButtonClick} />
      </li>
      <li>
        <ViewNoteAction
          type="link"
          Icon={AiFillEdit}
          text="Edit"
          title="Edit Note"
          to={`/notes/edit/${id}`} />
      </li>
      <li>
        <ViewNoteAction
          type="button"
          Icon={AiFillRest}
          text="Delete"
          title="Delete Note"
          isDanger
          onClick={onDeleteButtonClick} />
      </li>
    </ul>
  );
}

ViewNoteActions.propTypes = {
  id: string.isRequired,
  isArchived: bool.isRequired,
  onArchiveButtonClick: func.isRequired,
  onDeleteButtonClick: func.isRequired,
};

export default ViewNoteActions;
