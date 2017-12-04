import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ heading, detail }) => (
  <li>
    <span className="todo-header">{heading}</span>-
    <span className="todo-detail">{detail}</span>
  </li>
);

Todo.propTypes = {
  heading: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default Todo;
