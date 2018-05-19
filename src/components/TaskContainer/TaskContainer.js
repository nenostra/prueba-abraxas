import React from 'react';
import propTypes from 'prop-types';

const TaskContainer = ({ title, description }) => (
  <div>
    {title} - {description}
  </div>
);

TaskContainer.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default TaskContainer;
