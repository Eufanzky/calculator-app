import "./Button.css";
import { CalculatorContext } from "../context/CalculatorContext";
import { useContext } from "react";

export function Button({ className, content }) {
  const {
    screenValue,
    writeOnScreen,
    resetScreen,
    deleteScreen,
    makeOperations,
  } = useContext(CalculatorContext);


  const handleClick = (e) => {
    if (e.target.className === "button-element normal-bg-color") {
      writeOnScreen(e.target.textContent); //writes on screen the button value
    } else if (e.target.className === "button-element delete-button") {
      deleteScreen();
    } else if (e.target.className === "button-element reset-button") {
      resetScreen();
    } else if (e.target.className === "button-element equals-button") {
      makeOperations(1,2,3)
    }
  };
  
  return (
    <button onClick={handleClick} className={className}>
      {content}
    </button>
  );
}
