import React from "react";
import AppLayout from "../Layouts/AppLayout";
import { Outlet } from "react-router-dom";

export default function app() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
