import PropTypes from 'prop-types';
import React, { Component } from 'react';

class EditTodo extends Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  };

  state = {
    heading: '',
    detail: '',
    dueDate: ''
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { onAddTodo } = this.props;
    onAddTodo(this.state);
  };

  render() {
    const { heading, detail, dueDate } = this.state;
    //NOTE: Usually we would not hardcode the id's in React component as it would make it hard to use re-use this component.
    //Here they are hardcoded to make the code a little bit simpler.
    return (
      <section>
        <h2>Add a Todo</h2>
        <form noValidate={true} onSubmit={this.onSubmitHandler}>
          <label htmlFor="heading">Heading</label>
          <input name="heading" id="heading" className="form-control" onChange={this.onChangeHandler} value={heading} />
          <label htmlFor="detail">Detail</label>
          <input name="detail" id="detail" className="form-control" onChange={this.onChangeHandler} value={detail} />
          <label htmlFor="dueDate">Due date</label>
          <input name="dueDate" id="dueDate" className="form-control" onChange={this.onChangeHandler} value={dueDate} />
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </form>
      </section>
    );
  }
}

export default EditTodo;
