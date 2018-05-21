export const modal = (state = { modalIsOpen: false }, action) => {
  const { type } = action;
  switch (type) {
    case ('OPEN_MODAL'):
      return { modalIsOpen: true };
    case ('CLOSE_MODAL'):
    case ('TASK_CREATION_SUCCESS'):
      return { modalIsOpen: false };
    default:
      return state;
  }
};

/* IN PROGRESS Y RUNNING PUEDEN SER ESTADO GLOBAL */
export const running = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case ('START_TASK'):
      return true;
    default:
      return state;
  }
};

/* NO METER EL IN PROGRESS EN TASK */
export const tasks = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ('TASK_CREATION_SUCCESS'):
      return [
        ...state,
        {
          ...payload,
          started: false,
          timeLeft: payload.duration,
          inProgress: state.length === 0,
          running: false,
          completed: false,
        },
      ];
    default:
      return state;
  }
};
