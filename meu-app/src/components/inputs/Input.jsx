import './Input.css'

function Input ({type, size, label, showLabel, error, disabled}) {
    return(
        <div className='inputGrupo'>
            {/*Mostrar etiqueta */}
            {showLabel && (
                <label className="inputLabel">
                    {label}
                </label>
            )}

            {/*Configuração input*/}
            <input className={`input ${error ? 'input-error' : ''} input ${size} input ${color}`} 
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            />

            {/*Messagem de erro*/}
            {error && (
                <span className='error-message'>
                    Campo invalido
                </span>
            )}
            
        </div>
    )
}

export default Input