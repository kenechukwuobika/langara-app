const Card = props => {

    return (
        <button onClick={props.onClick} className="card__info">
            <div className="card__offset">
                <div className="card__offset--front">
                    <div className="card__offset--wrapper">
                        <div className="card__offset--content">
                            <h4 className="card__offset--title">{props.text}</h4>
                        </div>
                    </div>
                </div>

                <div className="card__offset--back"></div>
            </div>
        </button>
    )
}

export default Card;