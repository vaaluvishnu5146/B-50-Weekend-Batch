import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import TaskReducer from "./Reducers/TaskReducers.slice";

export default configureStore({
  // Root reducer
  reducer: {
    tasksReducer: TaskReducer,
  },
});
