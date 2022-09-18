import React from 'react';
import { elementType, string } from 'prop-types';

function WriteNoteHeading({ Icon, title }) {
  return (
    <h2 className="write-note-page__heading">
      <Icon className="write-note-page__heading-icon" />
      {title}
    </h2>
  );
}

WriteNoteHeading.propTypes = {
  Icon: elementType.isRequired,
  title: string.isRequired,
};

export default WriteNoteHeading;
