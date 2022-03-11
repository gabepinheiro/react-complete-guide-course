import { configureStore } from '@reduxjs/toolkit'

import { counterSlice } from './counter-slice'

export { counterActions } from './counter-slice'

export const store = configureStore({
  reducer: counterSlice.reducer
})
