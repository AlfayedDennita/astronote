import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import { AiFillDelete } from 'react-icons/ai';

import {
  getNote, archiveNote, unarchiveNote, deleteNote,
} from '../utils/network-data';
import { truncateText } from '../utils';
import useTitle from '../hooks/useTitle';
import LocaleContext from '../contexts/LocaleContext';
import ModalContext from '../contexts/ModalContext';
import LoadingPage from './LoadingPage';
import Error404Page from './Error404Page';
import ViewNoteHeader from '../components/ViewNote/ViewNoteHeader';
import ViewNoteBody from '../components/ViewNote/ViewNoteBody';

import '../styles/view-note-page.css';

function ViewNotePage() {
  const navigate = useNavigate();
  const params = useParams();
  const { getString } = useContext(LocaleContext);
  const { confirm } = useContext(ModalContext);
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState(null);
  const [isArchived, setIsArchived] = useState(note ? note.archived : false);

  useEffect(() => {
    const getNoteFromNetwork = async () => {
      const { error, data } = await getNote(params.id);
      if (!error) {
        setNote(data);
        setIsArchived(data.archived);
      }
      setIsLoading(false);
    };
    getNoteFromNetwork();
  }, [params]);

  const onArchiveHandler = async () => {
    if (isArchived) {
      await unarchiveNote(note.id);
    } else {
      await archiveNote(note.id);
    }
    setIsArchived((prevIsArchived) => !prevIsArchived);
  };

  const onDeleteHandler = async () => {
    const isAgreed = await confirm({
      title: getString(45),
      message: `${getString(46)} "${note.title}" ${getString(47)}?`,
      ConfirmIcon: AiFillDelete,
      confirmText: getString(48),
      isDanger: true,
    });

    if (isAgreed) {
      await deleteNote(note.id);
      if (isArchived) {
        navigate('/archives');
      } else {
        navigate('/');
      }
    }
  };

  let elementToRender = <Error404Page />;

  useTitle((note !== null && !isLoading) ? truncateText(note.title, 50) : null);

  if (note !== null) {
    elementToRender = (
      <main className="main view-note-page">
        <div className="wrapper wrapper--padding-x view-note-page__wrapper">
          <ViewNoteHeader
            title={note.title}
            createdDate={note.createdAt}
            isArchived={isArchived}
            onArchiveButtonClick={onArchiveHandler}
            onDeleteButtonClick={onDeleteHandler}
          />
          <ViewNoteBody>{parser(note.body)}</ViewNoteBody>
        </div>
      </main>
    );
  }

  return isLoading ? <LoadingPage /> : elementToRender;
}

export default ViewNotePage;
