import React from "react";
import { useParams } from "react-router";

export default function Groceries() {
  const { type = "" } = useParams();
  return (
    <div
      className=""
      style={{
        background: type === "oil" ? "red" : "lightGreen",
      }}
    >
      {type}
    </div>
  );
}
