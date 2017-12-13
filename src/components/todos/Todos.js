import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getTodos } from '../../data/todoDataAsync';
import Todo from './Todo';

class Todos extends Component {
  state = {
    dataLoaded: false,
    isSaving: false,
    todos: []
  };

  componentDidMount() {
    getTodos().then(todos => {
      this.setState({
        todos,
        dataLoaded: true
      });
    });
    document.title = 'ODelft Basic Todo App | Todos';
    this.heading.focus();
  }

  render() {
    const { dataLoaded } = this.state;
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <section>
            <h2
              tabIndex="-1"
              ref={heading => {
                this.heading = heading;
              }}>
              Todos
            </h2>
            {dataLoaded ? (
              <ul>
                {this.state.todos.map(todo => <Todo key={todo.id} heading={todo.heading} detail={todo.detail} />)}
              </ul>
            ) : (
              <p className="loading">Todos loading...</p>
            )}
            <NavLink to="/todos/new">Add new Todo</NavLink>
          </section>
        </div>
      </div>
    );
  }
}

export default Todos;
