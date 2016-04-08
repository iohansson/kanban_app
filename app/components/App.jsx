import React from 'react';
import Notes from './Notes.jsx';
import NoteStore from '../store/NoteStore';
import NoteActions from '../actions/NoteActions';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = NoteStore.getState();
  }
  componentDidMount() {
    NoteStore.listen(this.storeChanged.bind(this));
  }
  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged.bind(this));
  }
  storeChanged(state) {
    this.setState(state);
  }
  addNote() {
    NoteActions.create({ task: 'New task' });
  }
  editNote(id, task) {
    if (!task.trim()) { return; }

    NoteActions.update({id, task});
  }
  deleteNote(id, e) {
    e.stopPropagation();

    NoteActions.delete(id);
  }
  render() {
    const {notes} = this.state;

    return (
      <div className="container">
        <button className="add-note" onClick={this.addNote.bind(this)}>+</button>
        <Notes notes={notes} onEdit={this.editNote.bind(this)} onDelete={this.deleteNote.bind(this)} />
      </div>
    );
  }
}
