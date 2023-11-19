import React, { createContext, useContext } from "react";

// WE NEED BOILER PLATE CODE
const TestContext = createContext({
  test: true,
});

export const useTest = () => useContext(TestContext);

export default function TestContextProvider({ children }) {
  const test = false;
  const value = {
    test,
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}
