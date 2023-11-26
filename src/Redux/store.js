import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import TaskReducer from "./Reducers/TaskReducers.slice";
import AuthReducer from "./Reducers/AuthReducer.slice";
import NotesReducer from "./Reducers/NoteReducer";

export default configureStore({
  // Root reducer
  reducer: {
    tasksReducer: TaskReducer,
    authReducer: AuthReducer,
    notesReducer: NotesReducer,
  },
});
