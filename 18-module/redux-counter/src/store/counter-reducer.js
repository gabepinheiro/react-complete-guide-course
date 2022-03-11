const initialState = {
  counter: 0,
  showCounter: false
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        showCounter: true
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        showCounter: true
      }
    case 'INCREASE':
      return {
        counter: state.counter + action.payload,
        showCounter: true
      }
    case 'TOGGLE':
      return {
        ...state,
        showCounter: !state.showCounter
      }
    default:
      return state
  }
}
