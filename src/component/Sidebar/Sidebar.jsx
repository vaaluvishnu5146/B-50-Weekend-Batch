import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  function handleClick(e) {
    console.log("Clicked Title", e);
  }

  return (
    <div class="sidebar h-full py-5 d-flex flex-column justify-content-between g-0">
      <div class="row mb-5 branding-container">
        <h5 class="text-center brand-name" onClick={(e) => handleClick(e)}>
          Medico Sales
        </h5>
      </div>
      <div class="row nav-links">
        <ul>
          <li class="nav-link active">
            <i class="bx bxs-grid-alt me-3"></i>
            <p>Dashboard</p>
          </li>
          <li class="nav-link">
            <i class="bx bx-test-tube me-3"></i>
            <p>Labtest</p>
          </li>
          <li class="nav-link">
            <i class="bx bxs-calendar-plus me-3"></i>
            <p>Appointment</p>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="d-flex align-items-center justify-content-start">
          <i class="bx bx-help-circle me-3"></i>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}
