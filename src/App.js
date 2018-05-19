import React from 'react';
import { connect } from 'react-redux';
// import TaskContainer from './components/TaskContainer/TaskContainer';
import './App.css';
import ModalWrapper from './containers/ModalWrapper/ModalWrapper';
import TaskList from './containers/TaskList/TaskList';

const App = ({ openModal }) => (
  <div className="App">
    <button onClick={openModal}>
      modal
    </button>
    <TaskList />
    <ModalWrapper />
  </div>
);

export default connect(
  null,
  dispatch => ({ openModal: () => dispatch({ type: 'OPEN_MODAL', payload: { modalIsOpen: true } }) }),
)(App);
