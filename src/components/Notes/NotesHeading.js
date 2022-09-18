import React, { useState, useEffect, useContext } from 'react';
import { elementType, string } from 'prop-types';

import { getGreeting } from '../../utils';
import { getUserLogged } from '../../utils/network-data';
import LocaleContext from '../../contexts/LocaleContext';

function NotesHeading({ Icon, title }) {
  const { locale } = useContext(LocaleContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const { error, data } = await getUserLogged();
      if (!error) {
        setUserName(data.name);
      }
    };
    getUser();
  }, []);

  return (
    <header className="notes-page__header">
      <p className="notes-page__greeting">
        {getGreeting(locale)}
        ,&nbsp;
        <span className="notes-page__greeting--highlighted">{userName}</span>
        &nbsp;&#128075;
      </p>
      <h2 className="notes-page__heading">
        <Icon className="notes-page__heading-icon" />
        {title}
      </h2>
    </header>
  );
}

NotesHeading.propTypes = {
  Icon: elementType.isRequired,
  title: string.isRequired,
};

export default NotesHeading;
