function ButtonContainer({ onButtonClick }) {
  const buttonNames = [
    "AC",
    "DEL",
    "±",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "%",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className="buttons">
        {buttonNames.map((btn) => (
          <button
            className="button"
            key={btn}
            onClick={() => onButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
}
export default ButtonContainer;
