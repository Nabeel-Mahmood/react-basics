import React, { Component } from 'react';
import { addTodo, getTodos } from '../../data/todoDataAsync';
import EditTodo from './EditTodo';
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
  }

  onAddTodoHandler = todo => {
    this.setState(
      {
        isSaving: true
      },
      () => {
        addTodo(todo).then(todos => {
          this.setState({
            todos,
            isSaving: false
          });
        });
      }
    );
  };

  render() {
    const { dataLoaded, isSaving } = this.state;
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <section>
            <h2>Todos</h2>
            {dataLoaded ? (
              <ul>
                {this.state.todos.map(todo => <Todo key={todo.id} heading={todo.heading} detail={todo.detail} />)}
              </ul>
            ) : (
              <p className="loading">Todos loading...</p>
            )}
          </section>
        </div>
        <div className="col-xs-offset-2 col-xs-8">
          <EditTodo onAddTodo={this.onAddTodoHandler} isSaving={isSaving} />
        </div>
      </div>
    );
  }
}

export default Todos;
