import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import TaskForm from '../TaskForm/TaskForm';
import DeleteTask from '../DeleteTask/DeleteTask';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    height: 200,
    width: 200,
  },
};

Modal.setAppElement('#root');

const mapStateToProps = ({ tasks, modal: { modalIsOpen, modalType, id } }) =>
  ({ task: tasks.reduce((acc, task) => (task._id === id ? task : acc), {}), modalIsOpen, modalType });

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
});

const modalMap = {
  create: TaskForm,
  edit: TaskForm,
  delete: DeleteTask,
};

const ModalWrapper = ({ task, modalType, modalIsOpen, closeModal, children }) => {
  const SpecificModal = modalMap[modalType];
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {modalType ? <SpecificModal task={task} /> : null}
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
