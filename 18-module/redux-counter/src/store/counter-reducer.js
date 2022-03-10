const initialState = {
  counter: 0
}

export const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'INCREASE') {
    return {
      counter: state.counter + action.payload
    }
  }

  return state
}
