import React from 'react';
import { connect } from 'react-redux';
// import TaskContainer from './components/TaskContainer/TaskContainer';
// import AddTask from './components/AddTask/AddTask';
import './App.css';
import ModalWrapper from './containers/ModalWrapper';

const App = ({ openModal }) => (
  <div className="App">
    <button onClick={openModal}>
      modal
    </button>
    <ModalWrapper>
      HOLAS
    </ModalWrapper>
  </div>
);

export default connect(
  null,
  dispatch => ({ openModal: () => dispatch({ type: 'OPEN_MODAL', payload: { modalIsOpen: true } }) }),
)(App);
