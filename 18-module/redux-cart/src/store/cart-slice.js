import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = {
  items: [],
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const existsItem = state.items.find(item => item.id === newItem.id)

      state.totalQuantity++

      if(!existsItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        })
      } else {
        existsItem.quantity++
        existsItem.totalPrice += newItem.price
      }

    },
    removeItemFromCart(state, action){
      const id = action.payload
      const existsItem = state.items.find(item => item.id === id)

      state.totalQuantity--

      if(existsItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id)
      } else {
        existsItem.quantity--
        existsItem.totalPrice -= existsItem.price
      }
    },
  }
})

export const cartActions = cartSlice.actions
export { cartSlice }
