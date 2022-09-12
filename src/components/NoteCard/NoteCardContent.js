import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import { formatDate, truncateText } from '../../utils';

function NoteCardContent({ id, title, createdDate, body }) {
  const maxLengths = {
    title: 100,
    body: 200,
  };

  return (
    <section className="note-card__content">
      <h3>
        <Link
          className="link line-clamp line-clamp--2 note-card__link"
          to={`/notes/${id}`}
          title="Open Note">
            {truncateText(title, maxLengths.title)}
        </Link>
      </h3>
      <time
        className="note-card__date"
        dateTime={createdDate}>
          {formatDate(createdDate)}
      </time>
      <p className="line-clamp note-card__body">
        {truncateText(body, maxLengths.body)}
      </p>
    </section>
  );
}

NoteCardContent.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  createdDate: string.isRequired,
  body: string.isRequired,
};

export default NoteCardContent;
