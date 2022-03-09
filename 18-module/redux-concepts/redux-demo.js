import redux from 'redux'

const counterStateInitial = {
  counter: 0
}

const counterReducer = (state = counterStateInitial, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }

  return state
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
  const state = store.getState()
  console.log(state)
}

store.subscribe(counterSubscriber)

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
