
const Button = props => {

    const { isHollow, icon, text, onClick } = props;
    console.log(onClick)
    const className = isHollow ? 'btn--hollow' : 'btn--solid'

    return (
        <button onClick={onClick} className={`btn ${className}`}>
            <span>{text}</span>
            {icon && <img className="btn__icon" src={icon} alt={icon} />}
        </button>
    )
}

Button.defaultProps = {
    isHollow: false,
    icon: false
}

export default Button;