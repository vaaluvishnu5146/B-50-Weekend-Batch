import React, { useRef, useState, useEffect } from "react";

export default function RefForm() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const phoneNumber = useRef(null);

  useEffect(() => {
    firstName.current.focus();
  }, []);

  console.log("Changing");

  return (
    <div>
      <div>
        <input ref={firstName} />
      </div>
      <div>
        <input ref={lastName} />
      </div>
      <div>
        <input ref={phoneNumber} />
      </div>
      <button
        onClick={() => {
          console.log(firstName.current.value);
          console.log(lastName.current.value);
          console.log(phoneNumber.current.value);
        }}
      >
        Submit
      </button>
    </div>
  );
}
