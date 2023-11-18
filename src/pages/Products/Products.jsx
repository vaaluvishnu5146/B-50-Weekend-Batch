import React from "react";
import { useParams } from "react-router-dom";

export default function Products() {
  const { type = "" } = useParams();
  return <div>{type}</div>;
}
