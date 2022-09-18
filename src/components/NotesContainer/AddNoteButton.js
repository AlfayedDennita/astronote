import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import LocaleContext from '../../contexts/LocaleContext';

function AddNoteButton() {
  const { getString } = useContext(LocaleContext);

  return (
    <Link
      className="link button notes-container__add-button"
      to="/notes/new"
      title={getString(43)}
    >
      <AiOutlinePlusCircle className="notes-container__add-button-icon" />
      {getString(42)}
    </Link>
  );
}

export default AddNoteButton;
