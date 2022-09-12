import React from 'react';
import { bool, func, number, string } from 'prop-types';

function WriteNoteTitleInput({
  value, maxLength, isEmpty = false, onChange,
}) {
  return (
    <div className="write-note-page__input-container">
      <input
        className={`input-string ${isEmpty ? 'input-string--invalid' : ''} write-note-page__input write-note-page__input--title`}
        type="text"
        name="title"
        value={value}
        placeholder="Note Title"
        spellCheck={false}
        title="Note Title"
        data-length={value.length}
        data-max-length={maxLength}
        onChange={onChange} />
      <span
        className="write-note-page__input-badge write-note-page__input-badge--title">
          {value.length}/{maxLength}
      </span>
      <span
        className={`input-invalid-message ${isEmpty ? 'input-invalid-message--showed' : ''} write-note-page__input-invalid-message write-note-page__input-invalid-message--title`}>
          *required
      </span>
    </div>
  );
}

WriteNoteTitleInput.propTypes = {
  value: string.isRequired,
  maxLength: number.isRequired,
  isEmpty: bool,
  onChange: func.isRequired,
};

export default WriteNoteTitleInput;
