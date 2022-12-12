import './Button.css'

export function Button ({className, content}) {
    
    return(
        <button className={className}>
            <p>{content}</p>
        </button>
    )
}