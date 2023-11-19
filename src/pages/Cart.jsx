import React from "react";
import TestContextProvider from "../Context/Test.context";

export default function Cart() {
  return (
    <TestContextProvider>
      <h1> Cart Page</h1>
    </TestContextProvider>
  );
}
