import React from "react";
import "./Input.css";

export default function InputComponent(props) {
  return (
    <div className="mb-3">
      <label for={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        required
      />
      <div class="">{props.error}</div>
    </div>
  );
}
