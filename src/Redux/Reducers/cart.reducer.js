import { createSlice } from "@reduxjs/toolkit";

export const CartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (action.payload) {
        state.cart.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = CartReducer.actions;
export default CartReducer.reducer;
