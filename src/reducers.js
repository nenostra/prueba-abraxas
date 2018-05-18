export const reducer = (state, action) =>
  (action.type === 'ALGO' ? state : null);
