import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Reducers/TaskReducers.slice";
import FormCard from "../Components/FormCard/FormCard";
import { addNotes, getNoteById } from "../Redux/Reducers/NoteReducer";

const INITIAL_STATE = {
  title: "",
  description: "",
  endDate: "",
  endTime: "",
};

export default function Note() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const dispatcher = useDispatch();
  const { notes = [], note = {} } = useSelector((state) => state.notesReducer);

  React.useEffect(() => {
    setFormData(note.title ? note : INITIAL_STATE);
    return () => {};
  }, [note]);

  function handleSaveTask(e) {
    dispatcher(addNotes(formData));
    setFormData(INITIAL_STATE);
  }

  function handleChange(e) {
    let formDataCopy = {
      ...formData,
    };
    formDataCopy[e.target.id] = e.target.value;
    setFormData(formDataCopy);
  }

  function handleEditClick(title = "") {
    const matchingData = dispatcher(getNoteById(title));
    console.log(matchingData);
  }

  return (
    <div>
      <div className="container">
        <FormCard
          handleChange={handleChange}
          values={formData}
          type="Notes"
          handleSubmit={handleSaveTask}
        />
        <div
          className="card listing-container"
          style={{
            textAlign: "start",
          }}
        >
          <div className="card-body">
            {notes.map((data, index) => (
              <div
                className="task-item mb-2 row"
                key={`${data.title}-${index}`}
              >
                <div className="col-8 prefix">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
                <div className="col-4 suffix">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditClick(data.title)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
