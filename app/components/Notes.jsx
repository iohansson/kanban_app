import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {
  render() {
    const {notes} = this.props;
    return (
      <ul className="note-list">{notes.map((note) =>
        <li className="note-list-item" key={note.id}><Note task={note.task} onEdit={this.props.onEdit.bind(null, note.id)} onDelete={this.props.onDelete.bind(null, note.id)} /></li>
      )}</ul>
    );
  }
}
