import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }
  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }
  renderEdit() {
    return <input type="text"
      ref={ (e) => e ? e.selectionStart = this.props.task.length : null }
      autofocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit.bind(this)}
      onKeyPress={this.checkEnter.bind(this)} />;
  }
  edit() {
    this.setState({
      editing: true
    });
  }
  checkEnter(e) {
    if (e.key === 'Enter') { this.finishEdit(e); }
  }
  finishEdit(e) {
    const value = e.target.value;
    if (this.props.onEdit) {
      this.props.onEdit(value);

      this.setState({
        editing: false
      });
    }
  }
  renderNote() {
    const {onDelete} = this.props;
    return (
      <div onClick={this.edit.bind(this)}>
        <span>{this.props.task}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  }
  renderDelete() {
    return <button onClick={this.props.onDelete}>x</button>
  }
}
