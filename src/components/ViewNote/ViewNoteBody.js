import React from 'react';
import { node } from 'prop-types';

function ViewNoteBody({ children }) {
  return (
    <div className="view-note-page__body">
      {children}
    </div>
  );
}

ViewNoteBody.propTypes = {
  children: node.isRequired,
};

export default ViewNoteBody;
