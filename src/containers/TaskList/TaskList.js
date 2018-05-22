import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from '../../components/Task/Task';

// Probar mover connect un nivel arriba como ejemplo redux todo
const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = dispatch => ({
  startTask: () => dispatch({ type: 'START_TASK' }),
  editTask: values => dispatch({ type: 'STOP_TASK', payload: values }),
  deleteTask: values => dispatch({ type: 'DELETE_TASK', payload: values }),
  setInProgress: values => dispatch({ type: 'SET_TASK_IN_PROGRESS', payload: values }),
});

const TaskList = ({
  tasks,
  startTask,
  editTask,
  deleteTask,
  setInProgress,
}) =>
  tasks.map(task => (
    <Task
      key={task._id}
      {...task}
      startTask={startTask}
      editTask={editTask}
      deleteTask={deleteTask}
      setInProgress={setInProgress}
    />
  ));

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
