import { createContext, useState, useEffect } from "react";

export const CalculatorContext = createContext();

export function CalculatorContextProvider(props) {
  const [screenValue, setScreenValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");

  const writeOnScreen = (value) => {
    if (
      value === "+" ||
      value === "-" ||
      value === "x" ||
      value === "/" ||
      screenValue.slice(-1) === "+" ||
      screenValue.slice(-1) === "-" ||
      screenValue.slice(-1) === "x" ||
      screenValue.slice(-1) === "/" 
    ) {
      setScreenValue(screenValue + ' ' + value);
    } else {
      setScreenValue(screenValue + value);
    }
    // if (
    //   (screenValue.slice(-1) === "+" ||
    //     screenValue.slice(-1) === "-" ||
    //     screenValue.slice(-1) === "x" ||
    //     screenValue.slice(-1) === "/" ||
    //     screenValue.slice(-1) === ".") &&
    //   (value === "+" ||
    //     value === "-" ||
    //     value === "x" ||
    //     value === "/" ||
    //     value === ".")
    // ) {
    //   console.log("error");
    // } else {
    //   setScreenValue(screenValue + value);
    // }
  };

  const resetScreen = () => {
    setScreenValue("");
  };

  const deleteScreen = () => {
    let size = screenValue.length;
    setScreenValue(screenValue.slice(0, size - 1));
    console.log(screenValue);
  };

  // const addition = (a, b) => a + b;
  // const substracion = (a, b) => a - b;
  // const multiplication = (a, b) => a * b;
  // const division = (a, b) => a / b;
  // const makeOperations = (firstValue, secondValue, operation) => {
  //   let result;
  //   if (operation==="+") {
  //     result = addition(firstValue,secondValue);
  //   } else if(operation==="-") {
  //     result = substracion(firstValue,secondValue);
  //   } else if(operation==="x") {
  //     result = multiplication(firstValue,secondValue);
  //   } else if(operation==="/") {
  //     result = division(firstValue,secondValue);
  //   }
  //   setAnswerValue(result);
  // };

  return (
    <CalculatorContext.Provider
      value={{
        screenValue,
        answerValue,
        writeOnScreen,
        resetScreen,
        deleteScreen,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
}
