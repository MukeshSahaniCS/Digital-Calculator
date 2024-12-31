import { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "=") {
      const expression = calVal.replace(/X/g, "*");
      const res = eval(expression);
      setCalVal(res);
    } else if (buttonText === "DEL") {
      setCalVal(calVal.slice(0, -1));
    } else if (buttonText === "±") {
      if (calVal && !isNaN(calVal)) {
        setCalVal((parseFloat(calVal) * -1).toString());
      }
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className="calculator">
      <Display calVal={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
