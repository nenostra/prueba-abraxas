import React from 'react';
import { connect } from 'react-redux';

const DeleteTask = ({ task, deleteTask, closeModal }) => (
  <div>
    <p>Delete task?</p>
    <button onClick={deleteTask(task._id)}>
      Yes
    </button>
    <button onClick={closeModal}>
      No
    </button>
  </div>
);

export default connect(
  null,
  dispatch =>
    ({
      deleteTask: id =>
        () => dispatch({ type: 'DELETE_TASK', payload: id }),
      closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
    }),
)(DeleteTask);
