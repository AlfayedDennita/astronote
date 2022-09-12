import React from 'react';
import autoBind from 'auto-bind/react';
import { oneOf } from 'prop-types';
import { AiFillPlusCircle, AiFillEdit } from 'react-icons/ai';

import withRouter from '../utils/withRouter';
import { getNote, addNote, editNote } from '../utils/local-data';

import Error404Page from './Error404Page';
import WriteNoteHeading from '../components/WriteNote/WriteNoteHeading';
import WriteNoteForm from '../components/WriteNote/WriteNoteForm';
import WriteNoteTitleInput from '../components/WriteNote/WriteNoteTitleInput';
import WriteNoteBodyInput from '../components/WriteNote/WriteNoteBodyInput';

import '../styles/write-note-page.css';

class WriteNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.note = getNote(this.props.params.id) || null;

    this.state = {
      titleInputValue: this.note ? this.note.title : '',
      bodyInputValue: this.note ? this.note.body : '',
      isTitleInputEmpty: false,
      isBodyInputEmpty: false,
    };

    this.titleInputMaxLength = 100;

    autoBind(this);
  }

  onFormSubmitHandler(event) {
    event.preventDefault();

    if (this.state.titleInputValue.length > 0 && this.state.bodyInputValue.length > 0) {
      const note = {
        title: this.state.titleInputValue,
        body: this.state.bodyInputValue,
      };

      if (this.note) {
        editNote({ id: this.note.id, ...note });
        this.note.archived ? this.props.navigate('/archives') : this.props.navigate('/');
      } else {
        addNote(note);
        this.props.navigate('/');
      }
    } else {
      this.setState({
        isTitleInputEmpty: this.state.titleInputValue.length <= 0,
        isBodyInputEmpty: this.state.bodyInputValue.length <= 0,
      });
    }
  }

  onTitleInputChangeHandler(event) {
    const title = event.target.value;

    this.setState((prevState) => ({
      titleInputValue: title.length <= this.titleInputMaxLength ? title : prevState.titleInputValue,
      isTitleInputEmpty: title.length <= 0,
    }));
  }

  onBodyInputChangeHandler(event) {
    const body = event.target.value;

    this.setState({
      bodyInputValue: event.target.value,
      isBodyInputEmpty: body.length <= 0,
    });
  }

  render() {
    let isSafeToRender = true;

    if (this.props.type === 'edit') {
      isSafeToRender = this.note;
    }

    const variants = {
      add: {
        title: 'Add New Note',
        Icon: AiFillPlusCircle,
      },
      edit: {
        title: 'Edit Note',
        Icon: AiFillEdit,
      },
    };

    const { type } = this.props;
    const { title, Icon } = variants[type];

    const renderDefault = (
      <main className="main write-note-page">
        <div className="wrapper write-note-page__wrapper">
          <WriteNoteHeading Icon={Icon} text={title} />
          <WriteNoteForm onSubmit={this.onFormSubmitHandler}>
              <WriteNoteTitleInput
                value={this.state.titleInputValue}
                maxLength={this.titleInputMaxLength}
                isEmpty={this.state.isTitleInputEmpty}
                onChange={this.onTitleInputChangeHandler} />
              <WriteNoteBodyInput
                value={this.state.bodyInputValue}
                isEmpty={this.state.isBodyInputEmpty}
                onChange={this.onBodyInputChangeHandler} />
              <button
                className="button button--padded button--bg-primary write-note-page__submit-button"
                type="submit"
                title={title}>
                  <Icon />{title}
              </button>
          </WriteNoteForm>
        </div>
      </main>
    );

    return isSafeToRender ? renderDefault : <Error404Page />;
  }
}

WriteNotePage.propTypes = {
  type: oneOf(['add', 'edit']).isRequired,
};

export default withRouter(WriteNotePage);
