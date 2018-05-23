import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from '../../components/Task/Task';

// Probar mover connect un nivel arriba como ejemplo redux todo
const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = dispatch => ({
  startTask: () => dispatch({ type: 'START_TASK' }),
  setInProgress: values => dispatch({ type: 'SET_TASK_IN_PROGRESS', payload: values }),
});

const TaskList = ({
  tasks,
  startTask,
  setInProgress,
}) =>
  tasks.map(task => (
    <Task
      key={task._id}
      {...task}
      startTask={startTask}
      setInProgress={setInProgress}
    />
  ));

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
