import React from 'react';
import { func, node } from 'prop-types';

function WriteNoteForm({ onSubmit, children }) {
  return (
    <form
      className="write-note-page__form"
      method="post"
      action=""
      onSubmit={onSubmit}>
        {children}
    </form>
  );
}

WriteNoteForm.propTypes = {
  onSubmit: func.isRequired,
  children: node,
};

export default WriteNoteForm;
