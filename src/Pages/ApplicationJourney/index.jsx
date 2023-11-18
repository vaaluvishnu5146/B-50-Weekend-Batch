import React from "react";
import { Outlet } from "react-router-dom";
import DashboardLayout from "../../Layouts/Layout";

export default function index() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
