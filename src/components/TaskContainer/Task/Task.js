import React from 'react';
import propTypes from 'prop-types';

const Task = ({ title, description }) => (
  <div>
    {title} - {description}
  </div>
);

Task.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default Task;
