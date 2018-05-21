import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from '../../components/Task/Task';

// Probar mover connect un nivel arriba como ejemplo redux todo
const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = dispatch => ({
  startTask: values => dispatch({ type: 'CREATE_TASK', payload: values }),
  editTask: () => dispatch({ type: 'CLOSE_MODAL', payload: { modalIsOpen: false } }),
  deleteTask: values => dispatch({ type: 'CREATE_TASK', payload: values }),
  setInProgress: values => dispatch({ type: 'CREATE_TASK', payload: values }),
});

const TaskList = ({ tasks }) =>
  tasks.map(task => <Task key={task.id} {...task} />);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
