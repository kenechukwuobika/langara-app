const Card = props => {

    const { number, text, onClick } = props;

    return (
        <button onClick={onClick} className="card__info">
            <div className="card__offset">
                <div className="card__offset--front">
                    <div className="card__offset--wrapper">
                        <div className="card__offset--content">
                            <h4 className="card__offset--title">
                                {number && <span>Q{number}: </span>}
                                <span>{text}</span>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="card__offset--back"></div>
            </div>
        </button>
    )
}

export default Card;