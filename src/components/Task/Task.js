import React from 'react';
import PropTypes from 'prop-types';
import OpenModalButton from '../../containers/OpenModalButton/OpenModalButton';

const Task = ({
  _id,
  title,
  description,
  duration,
  started,
  running,
  timeLeft,
  inProgress,
  completed,
  startTask,
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
    <OpenModalButton modalType="edit" content="Edit" id={_id} />
    <OpenModalButton modalType="delete" content="Delete" id={_id} />
  </div>
);

Task.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  started: PropTypes.bool.isRequired,
  running: PropTypes.bool.isRequired,
  timeLeft: PropTypes.string,
  inProgress: PropTypes.bool,
  completed: PropTypes.bool.isRequired,
  startTask: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
};

Task.defaultProps = {
  timeLeft: null,
  inProgress: false,
};

export default Task;
