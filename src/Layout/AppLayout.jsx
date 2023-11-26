import React, { useState, useEffect } from "react";
import ScrollableBadges from "../Components/ScrollableBadges/ScrollableBadges/ScrollableBadges";
import "./applayout.css";
import ProductListings from "../Components/ProductListings/ProductListings";
import ProductListView from "../Components/Cards/ProductListView";
import { useDispatch, useSelector } from "react-redux";
import { saveFoods } from "../Redux/Reducers/foods.reducer";
import Cart from "../Components/Cart/Cart";
import { saveCatalogue } from "../Redux/Reducers/catelogue.reducer";

export default function AppLayout() {
  // 1. Sidebar,
  // 2. Listing,
  // 3. Cart Caluclations
  const [selectedCategory, setSelectedCategory] = useState(0);
  const dispatcher = useDispatch();
  const { foods = [] } = useSelector((store) => store.foodsReducer);
  const { categories = [] } = useSelector(
    (store) => store.catalogueReducer.catalogue
  );

  useEffect(() => {
    fetch("http://localhost:3000/products.json")
      .then((response) => response.json())
      .then((result) => dispatcher(saveFoods(result.data)));
    fetch("http://localhost:3000/catalogue.json")
      .then((response) => response.json())
      .then((result) => dispatcher(saveCatalogue(result.data)));
  }, []);

  const foodsToShow =
    selectedCategory === "All"
      ? foods
      : foods.filter((d) => d.category === selectedCategory.toLowerCase());

  return (
    <div className="app-container">
      <div className="sidebar">x</div>
      <div className="listing-container">
        <ScrollableBadges
          options={categories}
          selected={selectedCategory}
          onSelect={(index) => setSelectedCategory(index)}
        />
        <div className="mb-5"></div>
        <ProductListings data={foodsToShow} />
      </div>
      <div className="cart-calculations">
        <Cart />
      </div>
    </div>
  );
}
