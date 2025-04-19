import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
      const existingItem = state.cart.find((item) => item.id === action.payload.id)
      if (existingItem) {
        state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
      }
      else {
        state.cart.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item)
    }
  },
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions

export default CartSlice.reducer