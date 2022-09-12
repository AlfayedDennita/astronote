import React from 'react';
import { bool, func, string } from 'prop-types';
import ContentEditable from 'react-contenteditable';

function WriteNoteBodyInput({ value, isEmpty = false, onChange }) {
  return (
    <div className="write-note-page__input-container">
      <ContentEditable
        className={`input-string input-string--contenteditable ${isEmpty ? 'input-string--invalid' : ''} write-note-page__input write-note-page__input--body`}
        html={value}
        data-placeholder="Enter your words here ..."
        spellCheck={false}
        title="Note Body"
        onChange={onChange} />
      <span
        className={`input-invalid-message ${isEmpty ? 'input-invalid-message--showed' : ''} write-note-page__input-invalid-message write-note-page__input-invalid-message--body`}>
          *required
      </span>
    </div>
  );
}

WriteNoteBodyInput.propTypes = {
  value: string.isRequired,
  isEmpty: bool,
  onChange: func.isRequired,
};

export default WriteNoteBodyInput;
