import React from 'react';
import autoBind from 'auto-bind/react';
import { oneOf } from 'prop-types';
import { AiFillBook, AiFillFolder } from 'react-icons/ai';

import withRouter from '../utils/withRouter';
import { getActiveNotes, getArchivedNotes } from '../utils/local-data';

import NotesHeading from '../components/Notes/NotesHeading';
import NotesSearchInput from '../components/Notes/NotesSearchInput';
import NotesContainer from '../components/NotesContainer/NotesContainer';

import '../styles/notes-page.css';

class NotesPage extends React.Component {
  constructor(props) {
    super(props);

    const titleQuery = this.props.searchParams.get('title') || '';

    this.state = {
      notes: this.getNotes(titleQuery) || [],
      query: titleQuery,
    };

    autoBind(this);
  }

  getNotes(query = '') {
    const notes = this.props.type === 'unarchived' ? getActiveNotes() : getArchivedNotes();

    return query.length > 0 ? this.filterNotesByTitle(notes, query) : notes;
  }

  filterNotesByTitle(notes, query) {
    return notes.filter((note) => {
      return note.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  refreshNotes() {
    this.setState({
      notes: this.getNotes(this.state.query) || [],
    });
  }

  onSearchInputChangeHandler(event) {
    const query = event.target.value;
    const filteredNotes = this.filterNotesByTitle(this.getNotes(), query);

    this.setState({
      query,
      notes: filteredNotes,
    });

    this.props.setSearchParams({ title: query });
  }

  render() {
    const { type } = this.props;

    const variants = {
      unarchived: {
        TitleIcon: AiFillBook,
        titleText: 'Your Amazing Notes',
      },
      archived: {
        TitleIcon: AiFillFolder,
        titleText: 'Your Archived Notes',
      },
    };

    const { TitleIcon, titleText } = variants[type];

    return (
      <main className="main notes-page">
        <div className="wrapper wrapper--padding-x notes-page__wrapper">
          <NotesHeading
            Icon={TitleIcon}
            text={titleText} />
          <NotesSearchInput
            query={this.state.query}
            placeholder="Search your notes by title here ..."
            onChange={this.onSearchInputChangeHandler} />
          <NotesContainer
            className="notes-page__container"
            type={type}
            notes={this.state.notes}
            refreshNotes={this.refreshNotes} />
        </div>
      </main>
    );
  }
}

NotesPage.propTypes = {
  type: oneOf(['unarchived', 'archived']).isRequired,
};

export default withRouter(NotesPage);
