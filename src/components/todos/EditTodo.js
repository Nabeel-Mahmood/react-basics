import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

class EditTodo extends Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    isSaving: PropTypes.bool
  };

  state = {
    heading: '',
    detail: '',
    dueDate: ''
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isSaving && this.props.isSaving) {
      this.setState({
        heading: '',
        detail: '',
        dueDate: ''
      });
    }
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { onAddTodo, isSaving } = this.props;
    if (!isSaving) {
      onAddTodo(this.state);
    }
  };

  render() {
    const { isSaving } = this.props;
    const { heading, detail, dueDate } = this.state;

    const buttonClasses = classNames('btn btn-primary', { spinner: isSaving });

    //NOTE: Usually we would not hardcode the id's in React component as it would make it hard to use re-use this component.
    //Here they are hardcoded to make the code a little bit simpler.
    return (
      <section>
        <h2>Add a Todo</h2>
        <form noValidate={true} onSubmit={this.onSubmitHandler}>
          <label htmlFor="heading">Heading</label>
          <input
            name="heading"
            id="heading"
            className="form-control"
            onChange={this.onChangeHandler}
            value={heading}
            readOnly={isSaving}
          />
          <label htmlFor="detail">Detail</label>
          <input
            name="detail"
            id="detail"
            className="form-control"
            onChange={this.onChangeHandler}
            value={detail}
            readOnly={isSaving}
          />
          <label htmlFor="dueDate">Due date</label>
          <input
            name="dueDate"
            id="dueDate"
            className="form-control"
            onChange={this.onChangeHandler}
            value={dueDate}
            readOnly={isSaving}
          />
          <button aria-busy={isSaving} type="submit" className={buttonClasses}>
            Add Todo
          </button>
        </form>
      </section>
    );
  }
}

export default EditTodo;
