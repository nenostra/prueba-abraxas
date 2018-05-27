import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from '../../components/Task/Task';

// Probar mover connect un nivel arriba como ejemplo redux todo
const mapStateToProps = ({ inProgress, tasks }) => ({ tasks, activeTaskId: inProgress.taskId });

const mapDispatchToProps = dispatch => ({
  setInProgress: task => () => dispatch({
    type: 'SET_TASK_IN_PROGRESS',
    payload: { taskId: task._id, timeLeft: task.timeLeft || task.duration, duration: task.duration },
  }),
});

const TaskList = ({
  tasks,
  activeTaskId,
  setInProgress,
}) =>
  tasks.reduce((acc, task) => (
    task._id === activeTaskId
      ? [
        <div>
          Active Task:
          <Task
            key={task._id}
            {...task}
          />
        </div>,
        ...acc,
      ]
      : [
        ...acc,
        <Task
          key={task._id}
          {...task}
          setInProgress={setInProgress(task)}
        />,
      ]
  ), []);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
