import React from "react";
import ButtonComponent from "../Components/Buttons/Button";

export default function Home() {
  const [counter1, setCounter1] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);
  const [counter3, setCounter3] = React.useState(0);

  // Component Did Mount
  React.useEffect(() => {
    return () => {
      window.confirm("Are you sure you want to leave the Home page?");
    };
  }, []);

  return (
    <div>
      <div id="counter1">
        <ButtonComponent label="+" onClick={() => setCounter1(counter1 + 1)} />
        <h1>{`Current x value is ${counter1}`}</h1>
        <ButtonComponent label="-" onClick={() => setCounter1(counter1 - 1)} />
      </div>
      <div id="counter2">
        <ButtonComponent label="+" onClick={() => setCounter2(counter2 + 1)} />
        <h1>{`Current x value is ${counter2}`}</h1>
        <ButtonComponent label="-" onClick={() => setCounter2(counter2 - 1)} />
      </div>
      <div id="counter2">
        <ButtonComponent label="+" onClick={() => setCounter3(counter3 + 1)} />
        <h1>{`Current x value is ${counter3}`}</h1>
        <ButtonComponent label="-" onClick={() => setCounter3(counter3 - 1)} />
      </div>
    </div>
  );
}
