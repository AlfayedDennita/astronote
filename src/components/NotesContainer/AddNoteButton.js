import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function AddNoteButton() {
  return (
    <Link
      className="link button notes-container__add-button"
      to="/notes/new"
      title="Add New Note">
        <AiOutlinePlusCircle className="notes-container__add-button-icon" />Add Note
    </Link>
  );
}

export default AddNoteButton;
