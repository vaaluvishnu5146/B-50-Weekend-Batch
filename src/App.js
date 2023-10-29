import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import InputComponent from "./component/elements/Inputs/Input";
import Table from "./component/Table/Table";

const tableData = [
  {
    invoiceId: "#AHGA68",
    date: "29/10/2023",
    customerName: "Otto",
    payableAMount: "1000",
    paidAmount: "1000",
    due: "0",
  },
  {
    invoiceId: "#AHGT45",
    date: "29/10/2023",
    customerName: "Derek",
    payableAMount: "600",
    paidAmount: "500",
    due: "100",
  },
  {
    invoiceId: "#AHGA45",
    date: "29/10/2023",
    customerName: "Georje",
    payableAMount: "1000",
    paidAmount: "1000",
    due: "0",
  },
];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <Sidebar />
          </div>
          <div class="col-10 p-5">
            <div class="row mb-5">
              <p>Create Search here</p>
            </div>
            <div class="row mb-5">
              <div class="col-3">
                <InputComponent
                  label="Customer"
                  id="customerName"
                  placeholder="Enter Customer Name"
                  type="text"
                />
              </div>
              <div class="col-3">
                <InputComponent
                  label="Invoice ID"
                  id="invoiceID"
                  placeholder="Enter Invoice ID"
                  type="number"
                />
              </div>
              <div class="col-3">
                <InputComponent
                  label="Starting Date"
                  id="startingDate"
                  placeholder="Enter Start Date"
                  type="date"
                />
              </div>
              <div class="col-3">
                <InputComponent
                  label="Ending Date"
                  id="endingDate"
                  placeholder="Enter End Date"
                  type="date"
                />
              </div>
            </div>
            <div class="row px-2">
              <Table data={tableData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
