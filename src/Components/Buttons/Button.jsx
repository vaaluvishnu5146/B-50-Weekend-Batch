function ButtonComponent({ onClick = () => {}, label = "" }) {
  return (
    <button className="customButton" onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonComponent;
