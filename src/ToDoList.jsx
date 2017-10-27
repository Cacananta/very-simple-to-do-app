import React from 'react';
import Todo from './Todo';

class ToDoList extends React.Component {
  render() {
    return (
      <div className="col-lg-8">
        <div className="card">
          <h8 className="card-header">View To-Do Items:</h8>
          <ul className="mb-0 px-1 pt-1">
            {
              (this.props.appState.length === 0) ?
              <div className="mt-3 mx-1">
                <h4><strong>Welcome to your To-Do app!</strong></h4>
                <p>Get started by adding something to do to the left!</p>
              </div>
              : this.props.appState.map(todo => <Todo key={todo.id} todo={todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}/>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ToDoList;