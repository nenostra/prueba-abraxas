import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from '../../components/Task/Task';

const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch({ type: 'CLOSE_MODAL', payload: { modalIsOpen: false } }),
  formSubmit: values => dispatch({ type: 'CREATE_TASK', payload: values }),
}); 

const TaskList = ({ tasks }) =>
  tasks.map(task => <Task key={task.id} {...task} />);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
