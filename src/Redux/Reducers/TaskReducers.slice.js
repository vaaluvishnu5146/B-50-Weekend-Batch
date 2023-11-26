import { createSlice } from "@reduxjs/toolkit";

export const TaskReducer = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTasks } = TaskReducer.actions;
export default TaskReducer.reducer;
