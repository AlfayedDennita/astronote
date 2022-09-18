import React, { useState, useContext } from 'react';
import { func } from 'prop-types';
import { AiFillPlusCircle } from 'react-icons/ai';

import LocaleContext from '../../contexts/LocaleContext';
import InputString from '../InputString';

function WriteNoteForm({ onSubmit }) {
  const { getString } = useContext(LocaleContext);
  const [title, setTitle] = useState({});
  const [body, setBody] = useState({});

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if ([title, body].every((input) => input.isValid)) {
      onSubmit({ title: title.value, body: body.value });
    }
  };

  return (
    <form
      className="write-note-page__form"
      onSubmit={onSubmitHandler}
    >
      <InputString
        className="write-note-page__input write-note-page__input--title"
        containerClassName="write-note-page__input-container"
        type="text"
        placeholder={getString(64)}
        title={getString(64)}
        isRequired
        maxLength={100}
        callback={setTitle}
      />
      <InputString
        className="write-note-page__input write-note-page__input--body"
        containerClassName="write-note-page__input-container"
        type="contenteditable"
        placeholder={getString(66)}
        title={getString(65)}
        isRequired
        callback={setBody}
      />
      <button
        className="button button--padded button--bg-primary write-note-page__submit-button"
        type="submit"
        title={getString(42)}
      >
        <AiFillPlusCircle />
        {getString(42)}
      </button>
    </form>
  );
}

WriteNoteForm.propTypes = {
  onSubmit: func.isRequired,
};

export default WriteNoteForm;
