const rootReducer = (previousState, action) => {
  const newState = Object.assign({}, previousState, {
    timestamp: action.timestamp,
    mouse: action.mouse,
  });
  return newState;
};

export default rootReducer;
