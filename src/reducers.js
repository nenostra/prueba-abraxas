export const modal = (state = { modalIsOpen: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ('OPEN_MODAL'):
      return { modalIsOpen: true };
    case ('CLOSE_MODAL'):
    case ('CREATE_TASK'):
      return { modalIsOpen: false };
    default:
      return state;
  }
};

export const tasks = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ('CREATE_TASK'):
      return [
        ...state,
        {
          ...payload,
          started: false,
          timeLeft: payload.duration,
          inProgress: state.length === 0,
          completed: false,
        },
      ];
    default:
      return state;
  }
};
