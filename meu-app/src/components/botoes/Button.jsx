import "./Button.css"

function Button(props) {
    return(
        <button className={`button ${props.color}`}>
            Entrar
        </button>
    )
}


export default Button