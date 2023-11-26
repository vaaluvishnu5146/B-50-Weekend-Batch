import React from "react";
import { AuthenticatedRoutes } from "../../Routes";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {AuthenticatedRoutes.children.map((route, index) => (
        <Link key={`${route.name}-${index}`} to={route.path}>
          {route.name}
        </Link>
      ))}
    </div>
  );
}
