import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-2">
          <Sidebar />
        </div>
        <div class="col-10 p-5">{children}</div>
      </div>
    </div>
  );
}
