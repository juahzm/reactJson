

const Button = ({ title }) => {
    const onClick = () => {
        console.log('ca marche bio')
    }
    return (
        <button
            type="button"
            className="bg-blue-200 px-4 rounded" onClick={onClick}>{title}
        </button>
    )
}

export default Button