import React from 'react';
import { elementType, string } from 'prop-types';

function WriteNoteHeading({ Icon, text }) {
  return (
    <h2 className="write-note-page__heading">
      <Icon className="write-note-page__heading-icon" />{text}
    </h2>
  );
}

WriteNoteHeading.propTypes = {
  Icon: elementType.isRequired,
  text: string.isRequired,
};

export default WriteNoteHeading;
