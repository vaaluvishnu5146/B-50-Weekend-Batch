import React, { useState } from "react";
import FormCard from "../Components/FormCard/FormCard";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../Redux/Reducers/TaskReducers.slice";

const INITIAL_STATE = {
  title: "",
  description: "",
  endDate: "",
  endTime: "",
};

export default function Tasks() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const dispatcher = useDispatch();
  const { tasks = [] } = useSelector((state) => state.tasksReducer);

  function handleSaveTask(e) {
    dispatcher(addTasks(formData));
    setFormData(INITIAL_STATE);
  }

  function handleChange(e) {
    let formDataCopy = {
      ...formData,
    };
    formDataCopy[e.target.id] = e.target.value;
    setFormData(formDataCopy);
  }
  return (
    <div className="container">
      <FormCard
        type="Tasks"
        values={formData}
        handleChange={handleChange}
        handleSubmit={handleSaveTask}
      />
    </div>
  );
}
