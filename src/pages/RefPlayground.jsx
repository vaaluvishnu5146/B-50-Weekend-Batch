import React from "react";

export default function RefPlayground() {
  // const paragraph = document.getElementById("para");
  const paraRef = React.useRef(null);

  //   setTimeout(() => {
  //     // paragraph.innerText = "Im a new text";
  //     paragraph.style.color = "red";
  //   }, 3000);
  function handleColorChange(color, background) {
    console.log(paraRef.current);
    paraRef.current.style.color = color;
    paraRef.current.style.backgroundColor = background;
  }

  return (
    <div>
      <p ref={paraRef} id="para">
        Im a super man
      </p>
      <button onClick={() => handleColorChange("red", "black")}>Red</button>
      <button onClick={() => handleColorChange("yellow", "green")}>
        Yellow
      </button>
      <button onClick={() => handleColorChange("blue", "skyblue")}>Blue</button>
    </div>
  );
}
