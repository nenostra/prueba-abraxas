export const reducer = (state, action) =>
  (action.type === 'ALGO' ? state : null);

export const modal = (state = { modalIsOpen: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ('OPEN_MODAL'):
      return { modalIsOpen: true };
    case ('CLOSE_MODAL'):
      return { modalIsOpen: false };
    default:
      return state;
  }
};
