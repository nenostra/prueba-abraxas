import React from 'react';
import { connect } from 'react-redux';

const OpenModalButton = ({ id = null, modalType, content, openModal }) => (
  <button onClick={openModal(modalType, id)}>
    { content }
  </button>
);

export default connect(
  null,
  dispatch =>
    ({
      openModal: (modalType, id) =>
        () => dispatch({ type: 'OPEN_MODAL', payload: { modalIsOpen: true, modalType, id } }),
    }),
)(OpenModalButton);
