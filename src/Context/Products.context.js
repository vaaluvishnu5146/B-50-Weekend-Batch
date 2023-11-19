import React, { useState, createContext, useContext, useEffect } from "react";

// WE NEED BOILER PLATE CODE
const PropertyContext = createContext({
  meat: null,
  vegetables: null,
  perfumes: null,
  fetchMeat: () => {},
});

export const useProducts = () => useContext(PropertyContext);

export default function PropertyContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [meat, setMeat] = useState(null);
  const [vegetables, setVegetables] = useState(null);
  const [perfumes, setPerfumes] = useState(null);

  useEffect(() => {
    fetchMeat();
    fetchPerfumes();
    return () => {};
  }, []);

  const value = {
    meat,
    vegetables,
    perfumes,
    fetchMeat,
  };

  function fetchMeat() {
    fetch(`http://localhost:3000/meat.json`)
      .then((response) => response.json())
      .then((result) => setMeat(result.data))
      .catch((err) => console.error(err));
  }

  function fetchPerfumes() {
    fetch(`http://localhost:3000/perfumes.json`)
      .then((response) => response.json())
      .then((result) => setPerfumes(result.data))
      .catch((err) => console.error(err));
  }

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
}
