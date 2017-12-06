import React, { Component } from 'react';
import { addTodo, todos } from '../../data/todoData';
import EditTodo from './EditTodo';
import Todo from './Todo';

class Todos extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.setState({
      todos
    });
  }

  onAddTodoHandler = todo => {
    addTodo(todo);
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <section>
            <h2>Todos</h2>
            <ul>{this.state.todos.map(todo => <Todo key={todo.id} heading={todo.heading} detail={todo.detail} />)}</ul>
          </section>
        </div>
        <div className="col-xs-offset-2 col-xs-8">
          <EditTodo onAddTodo={this.onAddTodoHandler} />
        </div>
      </div>
    );
  }
}

export default Todos;
