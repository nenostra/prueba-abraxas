import React from 'react';
import './App.css';
import OpenModalButton from './containers/OpenModalButton/OpenModalButton';
import ModalWrapper from './containers/ModalWrapper/ModalWrapper';
import TaskList from './containers/TaskList/TaskList';

const App = () => (
  <div className="App">
    <OpenModalButton
      modalType="create"
      content="Create Modal"
    />
    <TaskList />
    <ModalWrapper />
  </div>
);

export default App;
