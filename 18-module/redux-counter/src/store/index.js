import { configureStore } from '@reduxjs/toolkit'

// Slices
import { counterSlice } from './counter-slice'
import { authSlice } from './auth-slice'

// Actions
export { counterActions } from './counter-slice'
export {authActions  } from './auth-slice'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
})
