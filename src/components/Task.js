import React from 'react';
import propTypes from 'prop-types';

const Task = props => (
  <div className={props.class}>
    <br />
  </div>
);

Task.propTypes = {
  class: propTypes.string.isRequired,
};

export default Task;
