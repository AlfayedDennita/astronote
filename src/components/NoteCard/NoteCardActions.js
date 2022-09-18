import React, { useContext } from 'react';
import { bool, func, string } from 'prop-types';
import { AiFillFolder, AiFillFolderOpen, AiFillDelete } from 'react-icons/ai';

import { archiveNote, unarchiveNote, deleteNote } from '../../utils/network-data';
import LocaleContext from '../../contexts/LocaleContext';
import ModalContext from '../../contexts/ModalContext';
import NoteCardAction from './NoteCardAction';

function NoteCardActions({
  id, title, isArchived, refreshNotes,
}) {
  const { getString } = useContext(LocaleContext);
  const { confirm } = useContext(ModalContext);

  const onArchiveHandler = async () => {
    if (isArchived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    await refreshNotes();
  };

  const onDeleteHandler = async () => {
    const isAgreed = await confirm({
      title: getString(45),
      message: `${getString(46)} "${title}" ${getString(47)}?`,
      ConfirmIcon: AiFillDelete,
      confirmText: getString(48),
      isDanger: true,
    });
    if (isAgreed) {
      await deleteNote(id);
    }
    await refreshNotes();
  };

  const variants = {
    archiveButton: {
      Icon: isArchived ? AiFillFolderOpen : AiFillFolder,
      title: isArchived ? getString(49) : getString(50),
    },
  };

  return (
    <ul className="note-card__actions">
      <li>
        <NoteCardAction
          Icon={variants.archiveButton.Icon}
          title={variants.archiveButton.title}
          onClick={onArchiveHandler}
        />
      </li>
      <li>
        <NoteCardAction
          Icon={AiFillDelete}
          title={getString(45)}
          isDanger
          onClick={onDeleteHandler}
        />
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
