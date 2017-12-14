import React, { Component } from 'react';
import { addTodo } from '../../data/todoDataAsync';
import EditTodo from './EditTodo';

class Todos extends Component {
  state = {
    isSaving: false
  };

  componentDidMount() {
    document.title = 'ODelft Basic Todo App | Add Todo';
  }

  onAddTodoHandler = todo => {
    const { history } = this.props;
    this.setState(
      {
        isSaving: true
      },
      () => {
        addTodo(todo).then(() => {
          this.setState(
            {
              isSaving: false
            },
            () => {
              history.push('/todos');
            }
          );
        });
      }
    );
  };

  render() {
    const { isSaving } = this.state;
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <EditTodo onSaveTodo={this.onAddTodoHandler} isSaving={isSaving} />
        </div>
      </div>
    );
  }
}

export default Todos;
