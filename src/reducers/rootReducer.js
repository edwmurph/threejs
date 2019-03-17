const rootReducer = (previousState, action) => {
  const newState = {};

  switch (action.type) {
    case 'TIMESTAMP':
      Object.assign(newState, { timestamp: action.timestamp })
      break;
    case 'MOUSE_DOWN':
      Object.assign(newState, { mouse: action.mouse })
      break;
    default:
  }

  return newState;
}

export default rootReducer
