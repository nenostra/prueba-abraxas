import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from '../../components/Task/Task';

const TaskList = ({ tasks }) =>
  tasks.map(task => <Task key={task.id} {...task} />);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(({ tasks }) => ({ tasks }))(TaskList);
