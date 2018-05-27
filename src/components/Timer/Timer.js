import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // MOVER DE AQUÏ!

const Timer = ({
  taskId,
  running,
  timeLeft,
  start,
  stop,
  reset,
}) => (
  <div style={{ border: '1px solid black' }}>
    Time Left: {timeLeft}<br />
    <button onClick={running ? stop(taskId) : start(taskId)}>{running ? 'Stop' : 'Start' }</button>
    <button onClick={reset(taskId)}>Reset</button> {/* ASK FOR STOP BEFORE RESET */}
  </div>
);

export default connect(
  ({ inProgress: { running, timeLeft, taskId } }) => ({ running, timeLeft, taskId }),
  dispatch =>
    ({
      start: id => dispatch({ type: 'START_TASK', payload: id }),
      stop: id => dispatch({ type: 'STOP_TASK', payload: id }),
      reset: id => dispatch({ type: 'RESET_TASK', payload: id }),
    }),
)(Timer);
