import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Todo = ({ id, heading, detail }) => (
  <li>
    <NavLink className="non-absolute" to={`/todos/${id}`}>
      {heading}
    </NavLink>-
    <span className="todo-detail">{detail}</span>
  </li>
);

Todo.propTypes = {
  heading: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired
};

export default Todo;
