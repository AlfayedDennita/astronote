import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';

import { addNote } from '../utils/network-data';
import useTitle from '../hooks/useTitle';
import LocaleContext from '../contexts/LocaleContext';
import WriteNoteHeading from '../components/WriteNote/WriteNoteHeading';
import WriteNoteForm from '../components/WriteNote/WriteNoteForm';

import '../styles/write-note-page.css';

function WriteNotePage() {
  const navigate = useNavigate();
  const { getString } = useContext(LocaleContext);

  const onSubmitHandler = async (note) => {
    const { error } = await addNote(note);
    if (!error) {
      navigate('/');
    }
  };

  useTitle(getString(42));

  return (
    <main className="main write-note-page">
      <div className="wrapper wrapper--padding-x write-note-page__wrapper">
        <WriteNoteHeading
          Icon={AiFillPlusCircle}
          title={getString(63)}
        />
        <WriteNoteForm
          onSubmit={onSubmitHandler}
        />
      </div>
    </main>
  );
}

export default WriteNotePage;
