import React from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  function handleClick(e) {
    console.log("Clicked Title", e);
  }

  return (
    <div class="sidebar h-full py-5 d-flex flex-column justify-content-between g-0">
      <div class="row mb-5 branding-container">
        <Link to="/dashboard">
          <h5 class="text-center brand-name" onClick={(e) => handleClick(e)}>
            Medico Sales
          </h5>
        </Link>
      </div>
      <div class="row nav-links">
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/dashboard/labtests"
            >
              <i class="bx bxs-grid-alt me-3"></i>
              <p>Lab Tests</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/dashboard/patients"
            >
              <i class="bx bxs-calendar-plus me-3"></i>
              <p>Patients</p>
            </NavLink>
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
