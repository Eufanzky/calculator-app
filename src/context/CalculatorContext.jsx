import { createContext, useState, useEffect } from "react";

export const CalculatorContext = createContext();

export function CalculatorContextProvider(props) {
  const [screenValue, setScreenValue] = useState("");

  const writeOnScreen = (value) => {
    setScreenValue(screenValue + value);
  };

  const resetScreen = () => {
    setScreenValue("");
  };

  const deleteScreen = () => {
    let size = screenValue.length;
    setScreenValue(screenValue.slice(0, size - 1));
    console.log(screenValue);
  };

  const addition = (a,b) => a+b;
  const substracion = (a,b) => a-b;
  const multiplicacion = (a,b) => a*b;
  const division = (a,b) => a/b;
  const makeOperations = (firstValue, secondValue) => {
    
  }


  return (
    <CalculatorContext.Provider
      value={{
        screenValue,
        writeOnScreen,
        resetScreen,
        deleteScreen,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
}
