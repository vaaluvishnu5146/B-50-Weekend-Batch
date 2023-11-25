import { createSlice } from "@reduxjs/toolkit";

export const TaskReducer = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = TaskReducer.actions;
export default TaskReducer.reducer;
