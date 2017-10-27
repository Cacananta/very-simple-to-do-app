import React from 'react';

const editIcon = "http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Editing%20Edit.ico"
const deleteIcon = "https://image.flaticon.com/icons/png/128/121/121113.png"
const saveIcon = "https://d30y9cdsu7xlg0.cloudfront.net/png/9016-200.png"

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todo
    };

    this.alertType = this.alertType.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  alertType(priority) {
    return (
      priority == "High" ? "navbar col-12 alert alert-danger mb-1" :
      priority == "Medium" ? "navbar col-12 alert alert-warning mb-1" :
      "navbar col-12 alert alert-success mb-1"
    )
  }

  handleEditButton() {
    const newToDo = Object.assign({}, this.state.todo, { editing: true });
    this.props.updateTodo(newToDo);
  }

  handleSaveButton() {
    const editToDo = Object.assign({}, this.state.todo, { editing: false });
    this.props.updateTodo(editToDo);
  }

  handleDeleteButton() {
    const deleteToDo = Object.assign({}, this.state.todo);
    this.props.deleteTodo(deleteToDo);
  }

  handleChange(e) {
    var stateName = e.target.name;
    var stateValue = e.target.value;
    const newToDo = Object.assign({}, this.state.todo, { [stateName]: stateValue });
    this.setState({
      todo: newToDo
    })
  }


  renderEditForm() {
    const item = this.state.todo;

    return (
      <div>
        <div className="mx-1">
          Edit your To-Do item:
          <textarea
            className="card-img-top col-lg-12 p-0 update-todo-text"
            name="text"
            value={this.state.todo.text}
            onChange={this.handleChange} />
        </div>
        Choose priority level:
        <div className="card-block">
          <div className="p-2">
            <select
              className="col-12 dropdown dropdown-toggle update-todo-priority"
              name="priority"
              value={this.state.todo.priority}
              onChange={this.handleChange}>
              <option className="dropdown-item">Choose a new priority...</option>
              <option className="dropdown-item">High</option>
              <option className="dropdown-item">Medium</option>
              <option className="dropdown-item">Low</option>
            </select>
          </div>
        </div>
        <div className="p-2">
          <button type="button" className="btn btn-primary col-12 update-todo" onClick={this.handleSaveButton}>SAVE</button>
        </div>
      </div>
    );
  }

  renderItem() {
    const item = this.state.todo;
    return (
      <div>
        <li className={this.alertType(item.priority)}>
          <div className="col-10">
            <h3 className="mb-0">{item.text}</h3>
          </div>
          <div className="btn-group">
            <button className="edit-todo" type="button" name="edit" onClick={this.handleEditButton}>
              <img src={editIcon} height="25" />
            </button >
            <button className="delete-todo" type="button" name="delete" onClick={this.handleDeleteButton}>
              <img src={deleteIcon} height="25" />
            </button>
          </div>
        </li>
      </div>
    );
  }

  render() {
    return (this.props.todo.editing) ? this.renderEditForm() : this.renderItem();
  }
}

export default Todo;
