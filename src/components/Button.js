

const Button = ({ title }) => {
    const onClick = () => {
        console.log('ca marche bio')
    }
    return (
        <button
            type="button"
            className="btn" onClick={onClick}>{title}
        </button>
    )
}

export default Button