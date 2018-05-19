import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ modal: { modalIsOpen } }) => ({ modalIsOpen });

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch({ type: 'CLOSE_MODAL', payload: { modalIsOpen: false } }),
});

const ModalWrapper = ({ modalIsOpen, closeModal, children }) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    {children}
  </Modal>
);

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
