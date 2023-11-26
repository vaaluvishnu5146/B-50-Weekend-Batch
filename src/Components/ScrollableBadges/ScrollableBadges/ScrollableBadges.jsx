import React from "react";
import "./scrollablebutton.css";

export default function ScrollableBadges({
  options = [],
  selected = 0,
  onSelect = (index) => {},
}) {
  return (
    <div className="scrollable-container">
      {options &&
        options.map((d, index) => (
          <div
            key={`${d.name}-${index}`}
            className={`item ${selected === d.name && "active"}`}
            onClick={(e) => onSelect(d.name)}
          >
            <p>{d.name}</p>
          </div>
        ))}
    </div>
  );
}
