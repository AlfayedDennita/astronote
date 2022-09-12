import React from 'react';
import { elementType, string } from 'prop-types';

function NotesHeading({ Icon, text }) {
  return (
    <h2 className="notes-page__heading">
      <Icon className="notes-page__heading-icon" />{text}
    </h2>
  );
}

NotesHeading.propTypes = {
  Icon: elementType.isRequired,
  text: string.isRequired,
};

export default NotesHeading;
