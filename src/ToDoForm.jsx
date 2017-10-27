import React from 'react';
import App from './App';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      priority : ''
    }
  this.handleChange = this.handleChange.bind(this)
  this.addClick = this.addClick.bind(this)
  }

  handleChange(e) {
    var stateName = e.target.name
    var stateValue = e.target.value
    this.setState({ [stateName]: stateValue })
  }

  addClick(e) {
    var text = this.state.text
    var priority = this.state.priority
    this.props.addToDo(text, priority);
    this.setState({ text: ''})
  }

  render() {
    return (
      <div className="col-lg-4">
        <div className="card">
          <h8 className="card-header">Add New To-Do Item:</h8>
          I would like to:
        <div className="mx-1">
            <textarea className="card-img-top col-lg-12 p-0 create-todo-text" name="text" onChange={this.handleChange} value={this.state.text} />
          </div>
          Choose priority level:
          <div className="card-block">
            <div className="p-2">
              <select className="col-12 dropdown dropdown-toggle create-todo-priority" name="priority" onChange={this.handleChange}>
                <option className="dropdown-item">Choose a priority...</option>
                <option value="1" className="dropdown-item">High</option>
                <option value="2" className="dropdown-item">Medium</option>
                <option value="3" className="dropdown-item">Low</option>
              </select>
            </div>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-primary col-12 create-todo" onClick={this.addClick}>ADD</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoForm;