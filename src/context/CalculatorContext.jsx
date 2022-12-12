import { createContext, useState, useEffect } from "react";

export const CalculatorContext = createContext();

export function CalculatorContextProvider(props) {
  const [screenValue, setScreenValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");

  const writeOnScreen = (value) => {
    if (
      (screenValue.slice(-2) === " +" ||
        screenValue.slice(-2) === " -" ||
        screenValue.slice(-2) === " x" ||
        screenValue.slice(-2) === " /") &&
      (value === "+" || value === "-" || value === "x" || value === "/")
    ) {
      console.log("error");
    } else if (
      value === "+" ||
      value === "-" ||
      value === "x" ||
      value === "/" ||
      screenValue.slice(-1) === "+" ||
      screenValue.slice(-1) === "-" ||
      screenValue.slice(-1) === "x" ||
      screenValue.slice(-1) === "/"
    ) {
      setScreenValue(screenValue + " " + value);
    } else {
      setScreenValue(screenValue + value);
    }
  };

  const resetScreen = () => {
    setScreenValue("");
  };

  const deleteScreen = () => {
    let size = screenValue.length;
    setScreenValue(screenValue.slice(0, size - 1));
    console.log(screenValue);
  };

  const makeOperations = (firstValue, secondValue, operation) => {
    let screenArray = extractArray(screenValue);
    console.log(screenArray);
    let ws = 0;
    while (screenArray.length!==1) {
      if (screenArray.findIndex(e=>e==="x") !== -1 && screenArray.findIndex(e=>e==="x") !== -1) {
        if(screenArray.findIndex(e=>e==="x") > screenArray.findIndex(e=>e==="/")) {
          screenArray = replaceInArray(screenArray, "x");
        } else if(screenArray.findIndex(e=>e==="x") < screenArray.findIndex(e=>e==="/")) {
          screenArray = replaceInArray(screenArray, "/");
        }
      }

      if(screenArray.findIndex(e=>e==="x") === -1 && screenArray.findIndex(e=>e==="x") === -1) {
        if(screenArray.findIndex(e=>e==="+") > screenArray.findIndex(e=>e==="-")) {
          screenArray = replaceInArray(screenArray, "+");
        } else if(screenArray.findIndex(e=>e==="+") < screenArray.findIndex(e=>e==="-")) {
          screenArray = replaceInArray(screenArray, "-");
        }
      }

    }
    console.log(screenArray);
  };

  const extractArray = (stringValue) => {
    let arrayValue = stringValue.split(" ");
    return arrayValue;
  };

  //replace three spaces into one single value
  const replaceInArray = (array, operation) => {
    const index = array.findIndex((element) => element === operation);
    let auxiliarValue;
    if(operation==="+") {
      auxiliarValue = parseFloat(array[index-1]) + parseFloat(array[index+1]);
    } else if(operation==="-") {
      auxiliarValue = parseFloat(array[index-1]) - parseFloat(array[index+1]);
    } else if(operation==="x") {
      auxiliarValue = parseFloat(array[index-1]) * parseFloat(array[index+1]);
    } else if(operation==="/") {
      auxiliarValue = parseFloat(array[index-1]) / parseFloat(array[index+1]);
    }
    // console.log(array[index - 1], array[index], array[index + 1]);
    // console.log(auxiliarValue);
    array = [...array.slice(0,index-1),JSON.stringify(auxiliarValue),...array.slice(index+2)]
    return array
  };

  return (
    <CalculatorContext.Provider
      value={{
        screenValue,
        answerValue,
        writeOnScreen,
        resetScreen,
        deleteScreen,
        makeOperations,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
}
