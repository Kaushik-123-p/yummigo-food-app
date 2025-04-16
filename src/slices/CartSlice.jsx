import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  /*
      when we create a Slice it's have three poperties
      1.name -> name of this slice (used in Redux DevTools)
      2.initialState ->   initial value of your state
      3.reducer -> functions to change the state
  */

  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const { addToCart, removeFromCart } = CartSlice.actions

export default CartSlice.reducer