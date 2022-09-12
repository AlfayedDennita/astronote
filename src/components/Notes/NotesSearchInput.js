import React from 'react';
import { func, string } from 'prop-types';

function NotesSearchInput({ query, placeholder, onChange }) {
  return (
    <input
      className="input-string input-string--search notes-page__search-input"
      type="search"
      value={query}
      placeholder={placeholder}
      title="Search Note"
      onChange={onChange} />
  );
}

NotesSearchInput.propType = {
  query: string.isRequired,
  placeholder: string.isRequired,
  onChange: func.isRequired,
};

export default NotesSearchInput;
