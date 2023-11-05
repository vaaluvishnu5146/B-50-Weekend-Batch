import React from "react";

const INITIAL_ITENARY_STATE = {
  done: false,
  placeName: "",
  placeImage: "",
};

const INITIAL_COMPONENT_STATE = {
  itenary: INITIAL_ITENARY_STATE,
  itenarys: [],
  mode: "create",
};

function reducer(state, action) {
  if (action.type === "HANDLE_INPUT_CHANGE") {
    return {
      ...state,
      itenary: {
        ...state.itenary,
        [action.payload.target.id]: action.payload.target.value,
      },
    };
  } else if (action.type === "HANDLE_ADD_ITENARY") {
    const itenarysCopy = [...state.itenarys];
    itenarysCopy.push(state.itenary);
    return {
      ...state,
      itenary: INITIAL_ITENARY_STATE,
      itenarys: itenarysCopy,
    };
  } else if (action.type === "HANDLE_EDIT_CLICKED") {
    if (action.payload) {
      let itenarysCopy = [...state.itenarys];
      const matchedData = itenarysCopy.find(
        (d) => d.placeName === action.payload
      );
      return {
        ...state,
        itenary: matchedData,
        mode: "Edit",
      };
    }
  } else if (action.type === "HANDLE_UPDATE_ITENARY") {
    const iternarysCopy = [...state.itenarys];
    const filteredData = iternarysCopy.filter(
      (d) => d.placeName !== state.itenary.placeName
    );
    filteredData.push(state.itenary);
    return {
      itenary: INITIAL_ITENARY_STATE,
      itenarys: filteredData,
      mode: "create",
    };
  }
  throw Error("Unknown action.");
}

export default function Todo() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_COMPONENT_STATE);

  function handleInputChange(e) {
    dispatch({ type: "HANDLE_INPUT_CHANGE", payload: e });
  }

  function handleAddItenary(e) {
    if (e) {
      dispatch({ type: "HANDLE_ADD_ITENARY" });
    }
  }

  function handleEditItenary(place = "") {
    dispatch({ type: "HANDLE_EDIT_CLICKED", payload: place });
  }

  function handleUpdateItenary(e) {
    if (e) {
      dispatch({ type: "HANDLE_UPDATE_ITENARY" });
    }
  }

  return (
    <div className="container">
      <h1>Diwali Trip Itenary</h1>
      <div className="row">
        <div className="col-3 py-3">
          <div class="mb-3">
            <label for="placeName" class="form-label">
              Place name
            </label>
            <input
              type="text"
              class="form-control"
              id="placeName"
              placeholder=""
              value={state.itenary["placeName"]}
              onChange={handleInputChange}
              disabled={state.mode === "Edit"}
            />
          </div>
          <div class="mb-3">
            <label for="placeImage" class="form-label">
              Place Image
            </label>
            <input
              type="text"
              class="form-control"
              id="placeImage"
              placeholder=""
              value={state.itenary["placeImage"]}
              onChange={handleInputChange}
            />
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary"
              type="button"
              onClick={
                state.mode === "create" ? handleAddItenary : handleUpdateItenary
              }
            >
              {state.mode === "create" ? "Add Itenary" : "Update Itenary"}
            </button>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            {state.itenarys.map((i, index) => (
              <div className="col-3" key={`Itenary-${index}`}>
                <div className="card d-flex flex-row">
                  <img
                    alt="places"
                    width={100}
                    style={{
                      objectFit: "contain",
                    }}
                    src={i.placeImage}
                  />
                  <h5 className="p-2">{i.placeName}</h5>
                  <div className="options">
                    <button
                      className="itenary-button"
                      onClick={() => handleEditItenary(i.placeName)}
                    >
                      E
                    </button>
                    <button className="itenary-button">C</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
