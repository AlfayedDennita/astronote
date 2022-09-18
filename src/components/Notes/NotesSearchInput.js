import React, { useState, useEffect, useContext } from 'react';
import { func, string } from 'prop-types';

import LocaleContext from '../../contexts/LocaleContext';
import InputString from '../InputString';

function NotesSearchInput({ initialQuery, placeholder, onChange }) {
  const { getString } = useContext(LocaleContext);
  const [query, setQuery] = useState({});

  useEffect(() => {
    onChange(query.value || '');
  }, [onChange, query]);

  return (
    <InputString
      className="notes-page__search-input"
      type="search"
      value={initialQuery}
      placeholder={placeholder}
      title={getString(39)}
      callback={setQuery}
    />
  );
}

NotesSearchInput.propTypes = {
  initialQuery: string.isRequired,
  placeholder: string.isRequired,
  onChange: func.isRequired,
};

export default NotesSearchInput;
