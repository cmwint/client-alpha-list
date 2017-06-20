import React from 'react';

class TodoForm extends React.Component{

  createTodo(e) {
    e.preventDefault();
    this.props.addTodo(this.todo.value);
    this.addDos.reset();
  }

  render(){
    return(
      <form ref={(input) => this.addDos = input} onSubmit={(e) => this.createTodo(e)} >
        <input ref={(input) => this.todo = input} />
        <button type="submit"> + </button>
      </form>
    )
  }

}

export default TodoForm;