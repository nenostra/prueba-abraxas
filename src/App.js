import React from 'react';
import './App.css';
import OpenModalButton from './containers/OpenModalButton/OpenModalButton';
import ModalWrapper from './containers/ModalWrapper/ModalWrapper';
import TaskList from './containers/TaskList/TaskList';
import Timer from './components/Timer/Timer';

const App = () => (
  <div className="App">
    <OpenModalButton
      modalType="create"
      content="Create Modal"
    />
    <Timer />
    <TaskList />
    <ModalWrapper />
  </div>
);

export default App;
