import './Screen.css'

export function Screen ({ screenValue }) {
    return(<div className="screen">
        <p>{screenValue}</p>
        <p>Answer</p>
    </div>)
}
