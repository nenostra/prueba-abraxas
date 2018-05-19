import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  title,
  description,
  duration,
  started,
  timeLeft,
  inProgress,
  completed,
}) => (
  <div style={{ border: '1px solid black' }}>
    Title: {title}<br />
    Description: {description}<br />
    Duration: {duration}<br />
    Started: {started}<br />
    Time Left: {timeLeft}<br />
    inProgress: {inProgress}<br />
    Completed: {completed}<br />
  </div>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  started: PropTypes.bool.isRequired,
  timeLeft: PropTypes.string,
  inProgress: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
};

Task.defaultProps = {
  timeLeft: null,
};

export default Task;
