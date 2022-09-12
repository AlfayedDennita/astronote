import React from 'react';
import autoBind from 'auto-bind/react';
import parser from 'html-react-parser';

import withRouter from '../utils/withRouter';
import { getNote, archiveNote, unarchiveNote, deleteNote } from '../utils/local-data';

import Error404Page from './Error404Page';
import ViewNoteHeader from '../components/ViewNote/ViewNoteHeader';
import ViewNoteBody from '../components/ViewNote/ViewNoteBody';

import '../styles/view-note-page.css';

class ViewNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.note = getNote(this.props.params.id) || null;

    this.state = {
      isArchived: this.note ? this.note.archived : null,
    };

    autoBind(this);
  }

  onArchiveButtonClickHandler() {
    this.state.isArchived
      ? unarchiveNote(this.note.id)
      : archiveNote(this.note.id);
    
    this.setState((prevState) => ({
      isArchived: !prevState.isArchived,
    }));
  }

  onDeleteButtonClickHandler() {
    const isAgreed = window.confirm(`Are you sure to delete "${this.note.title}" note?`);

    if (isAgreed) {
      deleteNote(this.note.id);
      this.state.isArchived
        ? this.props.navigate('/archives')
        : this.props.navigate('/');
    }
  }

  render() {
    let render = <Error404Page />

    if (this.note) {
      const { id, title, body, createdAt } = this.note;

      render = (
        <main className="main view-note-page">
          <div className="wrapper wrapper--padding-x view-note-page__wrapper">
            <ViewNoteHeader
              id={id}
              title={title}
              createdDate={createdAt}
              isArchived={this.state.isArchived}
              onArchiveButtonClick={this.onArchiveButtonClickHandler}
              onDeleteButtonClick={this.onDeleteButtonClickHandler} />
            <ViewNoteBody>{parser(body)}</ViewNoteBody>
          </div>
        </main>
      );
    }

    return render;
  }
}

export default withRouter(ViewNotePage);
