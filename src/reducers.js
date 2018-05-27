export const modal = (state = { modalIsOpen: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ('OPEN_MODAL'):
      return { modalIsOpen: true, modalType: payload.modalType, id: payload.id };
    case ('CLOSE_MODAL'):
    case ('TASK_CREATION_SUCCESS'):
    case ('TASK_EDIT_SUCCESS'):
    case ('TASK_DELETE_SUCCESS'):
      return { modalIsOpen: false };
    default:
      return state;
  }
};

export const inProgress = (state = { running: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ('SET_TASK_IN_PROGRESS'):
      return { ...state, ...payload };
    case ('START_TASK'):
      return { ...state, running: true };
    case ('TICK'):
      return { ...state, timeLeft: state.timeLeft - 1 };
    case ('RESET_TASK'):
      return { ...state, timeLeft: state.duration };
    default:
      return state;
  }
};

/* ENCONTRAR MODO DE SETEAR TIMELEFT ON FETCH */
export const tasks = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ('TASK_FETCH_SUCCESS'):
      return payload;
    case ('TASK_CREATION_SUCCESS'):
      return [
        ...state,
        {
          ...payload,
          started: false,
          timeLeft: payload.duration,
          completed: false,
        },
      ];
    case ('TASK_EDIT_SUCCESS'): {
      const taskIndex = state.findIndex(task => task._id === payload._id);
      return [
        ...state.slice(0, taskIndex),
        payload,
        ...state.slice(taskIndex + 1),
      ];
    }
    case ('TASK_DELETE_SUCCESS'): {
      const taskIndex = state.findIndex(task => task._id === payload._id);
      return [
        ...state.slice(0, taskIndex),
        ...state.slice(taskIndex + 1),
      ];
    }
    case ('TASK_FETCH_FAIL'):
    case ('TASK_CREATION_FAIL'):
    case ('TASK_EDIT_FAIL'):
    case ('TASK_DELETE_FAIL'):
    default:
      return state;
  }
};
