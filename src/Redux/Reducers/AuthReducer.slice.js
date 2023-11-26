import { createSlice } from "@reduxjs/toolkit";

export const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn } = AuthReducer.actions;
export default AuthReducer.reducer;
