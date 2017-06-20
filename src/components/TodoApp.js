import React, { Component } from 'react';

// components
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// assets
// import logo from './logo.svg';

// style
import './App.css';

// Contaner Component

// Todo Id
window.id = 0;
class TodoApp extends Component{
  constructor(props){
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.state = {
      data: []
    }
  }
  // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val, id: window.id++}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }
  // Handle remove
  handleRemove(id){
    // // Filter all todos except the one to be removed
    // const remainder = this.state.data.filter((todo) => {
    //   if(todo.id !== id) return todo;
    // });
    // // Update state with filter
    // this.setState({data: remainder});
  }

  render(){
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TodoApp;
