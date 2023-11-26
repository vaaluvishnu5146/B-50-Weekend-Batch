import { createSlice } from "@reduxjs/toolkit";

export const FoodReducer = createSlice({
  name: "foods",
  initialState: {
    foods: [],
  },
  reducers: {
    saveFoods: (state, action) => {
      if (action.payload) {
        state.foods = [];
        state.foods.push(...action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveFoods } = FoodReducer.actions;
export default FoodReducer.reducer;
