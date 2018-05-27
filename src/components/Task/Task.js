import React from 'react';
import PropTypes from 'prop-types';
import OpenModalButton from '../../containers/OpenModalButton/OpenModalButton';

const Task = ({
  _id,
  title,
  description,
  duration,
  completed,
  setInProgress,
}) => (
  <div style={{ border: '1px solid black' }}>
    Title: {title}<br />
    Description: {description}<br />
    Duration: {duration}<br />
    Completed: {completed ? 'true' : 'false'}<br />
    {setInProgress && <button onClick={setInProgress}>Set Active</button>}
    <OpenModalButton modalType="edit" content="Edit" id={_id} />
    <OpenModalButton modalType="delete" content="Delete" id={_id} />
  </div>
);

Task.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  setInProgress: PropTypes.func,
};

Task.defaultProps = {
  setInProgress: null,
};

export default Task;
