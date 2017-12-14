import React, { Component } from 'react';
import { getTodo, updateTodo } from '../../data/todoDataAsync';
import EditTodo from './EditTodo';

class UpdateTodo extends Component {
  state = {
    todo: {},
    isSaving: false
  };

  componentDidMount() {
    const { match } = this.props;
    getTodo(match.params.id).then(todo => {
      this.setState({
        todo
      });
    });

    document.title = 'ODelft Basic Todo App | Update Todo';
  }

  onUpdateTodoHandler = todo => {
    const { history, match } = this.props;
    this.setState(
      {
        isSaving: true
      },
      () => {
        updateTodo(match.params.id, todo).then(() => {
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
    const { todo, isSaving } = this.state;
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <EditTodo onSaveTodo={this.onUpdateTodoHandler} todo={todo} isSaving={isSaving} isEdit={true} />
        </div>
      </div>
    );
  }
}

export default UpdateTodo;
