import React from "react";
import Table from "../component/Table/Table";
import InputComponent from "../component/elements/Inputs/Input";
import Sidebar from "../component/Sidebar/Sidebar";

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
  {
    invoiceId: "#AHGC%5",
    date: "29/10/2021",
    customerName: "Kuttan",
    payableAMount: "1000",
    paidAmount: "1000",
    due: "0",
  },
];

export default function Dashboard() {
  return (
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
  );
}
