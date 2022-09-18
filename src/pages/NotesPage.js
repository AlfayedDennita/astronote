import React, {
  useState, useEffect, useContext, useMemo,
} from 'react';
import { oneOf } from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { AiFillBook, AiFillFolder } from 'react-icons/ai';

import { getActiveNotes, getArchivedNotes } from '../utils/network-data';
import useTitle from '../hooks/useTitle';
import LocaleContext from '../contexts/LocaleContext';
import LoadingPage from './LoadingPage';
import NotesHeading from '../components/Notes/NotesHeading';
import NotesSearchInput from '../components/Notes/NotesSearchInput';
import NotesContainer from '../components/NotesContainer/NotesContainer';

import '../styles/notes-page.css';

function NotesPage({ type }) {
  const { getString } = useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const getNotesByType = (type === 'unarchived' ? getActiveNotes : getArchivedNotes);

  useEffect(() => {
    const getNotes = async () => {
      const { error, data } = await getNotesByType();
      if (!error) {
        setNotes(data);
      }
      setIsLoading(false);
    };
    getNotes();
  }, [getNotesByType]);

  const getQuery = () => searchParams.get('title') || '';
  const [query, setQuery] = useState(() => getQuery());

  const searchInput = useMemo(() => ({
    onChange: (searchValue) => {
      if (searchValue !== query) {
        setQuery(searchValue);
        setSearchParams({ title: searchValue });
      }
    },
  }), [query, setSearchParams]);

  const refreshNotes = async () => {
    const { error, data } = await getNotesByType();
    if (!error) {
      setNotes(data);
    } else {
      setNotes([]);
    }
  };

  const filteredNotes = notes.filter(
    (note) => note.title.toLowerCase().includes(query.toLowerCase()),
  );

  const variants = {
    unarchived: {
      title: getString(34),
      HeadingIcon: AiFillBook,
      headingText: getString(36),
    },
    archived: {
      title: getString(35),
      HeadingIcon: AiFillFolder,
      headingText: getString(37),
    },
  };

  const { title, HeadingIcon, headingText } = variants[type];

  useTitle(!isLoading ? title : null);

  const elementToRender = (
    <main className="main notes-page">
      <div className="wrapper wrapper--padding-x notes-page__wrapper">
        <NotesHeading
          Icon={HeadingIcon}
          title={headingText}
        />
        <NotesSearchInput
          initialQuery={query}
          placeholder={getString(38)}
          onChange={searchInput.onChange}
        />
        <NotesContainer
          className="notes-page__container"
          type={type}
          notes={filteredNotes}
          refreshNotes={refreshNotes}
        />
      </div>
    </main>
  );

  return isLoading ? <LoadingPage /> : elementToRender;
}

NotesPage.propTypes = {
  type: oneOf(['unarchived', 'archived']).isRequired,
};

export default NotesPage;
