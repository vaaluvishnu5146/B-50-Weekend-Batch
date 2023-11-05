import { isFor } from "@babel/types";
import React from "react";

const INITIAL_ITENARY_STATE = {
  done: false,
  placeName: "",
  placeImage: "",
};

export default function Todo() {
  const [itenary, setItenary] = React.useState(INITIAL_ITENARY_STATE);
  const [itenarys, setItenarys] = React.useState([]);
  const [mode, setMode] = React.useState("create");

  function handleInputChange(e) {
    let itenaryCopy = {
      ...itenary,
    };
    itenaryCopy[e.target.id] = e.target.value;
    setItenary(itenaryCopy);
  }

  function handleAddItenary(e) {
    if (e) {
      let itenarysCopy = [...itenarys];
      if (itenary.placeName && itenary.placeImage) {
        itenarysCopy.push(itenary);
        setItenarys(itenarysCopy);
        setItenary(INITIAL_ITENARY_STATE);
      }
    }
  }

  function handleEditItenary(place = "") {
    if (place) {
      setMode("Edit");
      let itenarysCopy = [...itenarys];
      const matchedData = itenarysCopy.find((d) => d.placeName === place);
      setItenary(matchedData);
    }
  }

  function handleUpdateItenary() {
    const iternarysCopy = [...itenarys];
    const filteredData = iternarysCopy.filter(
      (d) => d.placeName !== itenary.placeName
    );
    filteredData.push(itenary);
    setItenarys(filteredData);
    setMode("create");
    setItenary(INITIAL_ITENARY_STATE);
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
              value={itenary["placeName"]}
              onChange={handleInputChange}
              disabled={mode === "Edit"}
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
              value={itenary["placeImage"]}
              onChange={handleInputChange}
            />
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary"
              type="button"
              onClick={
                mode === "create" ? handleAddItenary : handleUpdateItenary
              }
            >
              {mode === "create" ? "Add Itenary" : "Update Itenary"}
            </button>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            {itenarys.map((i, index) => (
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
