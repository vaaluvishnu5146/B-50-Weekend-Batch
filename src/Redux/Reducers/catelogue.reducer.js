import { createSlice } from "@reduxjs/toolkit";

export const CatalogueReducer = createSlice({
  name: "catalogue",
  initialState: {
    catalogue: {},
  },
  reducers: {
    saveCatalogue: (state, action) => {
      if (action.payload) {
        state.catalogue = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveCatalogue } = CatalogueReducer.actions;
export default CatalogueReducer.reducer;
