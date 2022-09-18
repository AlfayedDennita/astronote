import React, { useContext } from 'react';
import { bool, func } from 'prop-types';
import {
  AiFillFolder, AiFillFolderOpen, AiFillDelete,
} from 'react-icons/ai';

import LocaleContext from '../../contexts/LocaleContext';
import ViewNoteAction from './ViewNoteAction';

function ViewNoteActions({
  isArchived, onArchiveButtonClick, onDeleteButtonClick,
}) {
  const { getString } = useContext(LocaleContext);

  const variants = {
    archiveButton: {
      Icon: isArchived ? AiFillFolderOpen : AiFillFolder,
      text: isArchived ? getString(54) : getString(55),
    },
  };

  return (
    <ul className="view-note-page__actions">
      <li>
        <ViewNoteAction
          Icon={variants.archiveButton.Icon}
          text={variants.archiveButton.text}
          title={variants.archiveButton.text}
          onClick={onArchiveButtonClick}
        />
      </li>
      <li>
        <ViewNoteAction
          Icon={AiFillDelete}
          text={getString(48)}
          title={getString(45)}
          isDanger
          onClick={onDeleteButtonClick}
        />
      </li>
    </ul>
  );
}

ViewNoteActions.propTypes = {
  isArchived: bool.isRequired,
  onArchiveButtonClick: func.isRequired,
  onDeleteButtonClick: func.isRequired,
};

export default ViewNoteActions;
