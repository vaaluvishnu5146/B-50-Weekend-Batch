import React from "react";
import ButtonComponent from "../Components/Buttons/Button";

export default function Home() {
  const [x, setX] = React.useState(0);

  // Copmponent Will and Did update
  React.useEffect(() => {
    console.log(`Current x value is ${x}`);
    return () => {};
  }, [x]);

  // Component Did Mount
  React.useEffect(() => {
    return () => {
      window.confirm("Are you sure you want to leave the Home page?");
    };
  }, []);

  return (
    <div>
      <ButtonComponent label="+" onClick={() => setX(x + 1)} />
      <h1>{`Current x value is ${x}`}</h1>
      <ButtonComponent label="-" onClick={() => setX(x - 1)} />
    </div>
  );
}
