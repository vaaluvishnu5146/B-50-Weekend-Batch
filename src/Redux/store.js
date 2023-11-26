import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import TasksReducer from "./Reducers/tasks.reducer";
import foodsReducer from "./Reducers/foods.reducer";
import cartReducer from "./Reducers/cart.reducer";
import CatalogueReducer from "./Reducers/catelogue.reducer";

const store = configureStore({
  // ROOT REDUCER
  reducer: {
    tasksReducer: TasksReducer,
    foodsReducer: foodsReducer,
    cartReducer: cartReducer,
    catalogueReducer: CatalogueReducer,
  },
});

export default store;
