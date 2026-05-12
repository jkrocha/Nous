import "./Button.css"

function Button({color, text, size, icon}) {
    return(
        <button className={`button ${color} button ${size}`} >
            {text}
            {icon}
        </button>
    )
}


export default Button