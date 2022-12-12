import './Screen.css'

export function Screen ({ screenValue, answerValue }) {
    return(<div className="screen">
        <p>{screenValue}</p>
        <p>{answerValue}</p>
    </div>)
}
