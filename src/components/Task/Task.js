import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  title,
  description,
  duration,
  started,
  running,
  timeLeft,
  inProgress,
  completed,
  startTask,
  editTask,
  deleteTask,
  setInProgress,
}) => (
  <div style={{ border: '1px solid black' }}>
    Title: {title}<br />
    Description: {description}<br />
    Duration: {duration}<br />
    Started: {started}<br />
    Running: {running}<br />
    Time Left: {timeLeft}<br />
    Completed: {completed}<br />
    <button onClick={inProgress ? startTask : setInProgress}>{inProgress ? 'Start' : 'Set Active'}</button>
    <button onClick={editTask}>Edit</button>
    <button onClick={deleteTask}>Delete</button>
  </div>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  started: PropTypes.bool.isRequired,
  running: PropTypes.bool.isRequired,
  timeLeft: PropTypes.string,
  inProgress: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  startTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
};

Task.defaultProps = {
  timeLeft: null,
};

export default Task;
