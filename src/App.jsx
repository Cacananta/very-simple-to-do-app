import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

var count = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: []
      // text: this.state.toDoItem,
      // priority: this.state.priority,
      // editing: false,
      // id: count++
    }

    this.addToDo = this.addToDo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addToDo(text, priority) {
    const toDoList = this.state.toDoList;
    const newToDo = {
      text: text,
      priority: priority,
      editing: false,
      id: count++
    }
    const newToDoList = [...toDoList, newToDo];
    this.setState({
      toDoList: newToDoList
    });
  }

  updateTodo(editToDo) {
    const newToDoList = [...this.state.toDoList];
    const toDoEditIndex = newToDoList.findIndex(todo => todo.id === editToDo.id)
    newToDoList.splice(toDoEditIndex, 1, editToDo);
    this.setState({ toDoList: newToDoList });
  }

  deleteTodo(deleteToDo) {
    const newToDoList = [...this.state.toDoList];
    const toDoDeleteIndex = newToDoList.findIndex(todo => todo.id === deleteToDo.id)
    newToDoList.splice(toDoDeleteIndex, 1);
    this.setState({ toDoList: newToDoList});
  }

  render() {
    return (
      <div className='container'>
        <header className="white page-header">
          <h1>Very Simple To-Do App</h1>
          <h3>Track all of the things</h3>
        </header>
        <div className="row">
          <ToDoForm
            addToDo={this.addToDo}
          />
          <ToDoList
            appState={this.state.toDoList}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
