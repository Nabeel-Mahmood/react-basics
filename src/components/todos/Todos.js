import React, { Component } from 'react';
import { todos } from '../../data/todoData';
import Todo from './Todo';

class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.setState({
      todos,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <ul>{this.state.todos.map(todo => <Todo key={todo.id} heading={todo.heading} detail={todo.detail} />)}</ul>
        </div>
      </div>
    );
  }
}

export default Todos;
