import './Button.css'
import { CalculatorContext } from '../context/CalculatorContext'
import { useContext } from 'react'

export function Button ({className, content}) {
    const { writeOnScreen, resetScreen, deleteScreen} = useContext(CalculatorContext);
    const handleClick = (e) => {
        if(e.target.className==="button-element normal-bg-color") {
            writeOnScreen(e.target.textContent); //writes on screen the button value
            console.log(e.target.textContent);
        } else if(e.target.className==="button-element delete-button") {
            deleteScreen();
        } else if(e.target.className==="button-element reset-button") {
            resetScreen();
        }
    }


    return(
        <button onClick={handleClick} className={className}>
            {content}
        </button>
    )
}