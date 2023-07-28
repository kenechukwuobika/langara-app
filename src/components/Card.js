const Card = props => {

    return (
        <button onClick={props.onClick} class="card__info">
            <div class="card__offset">
                <div class="card__offset--front">
                    <div class="card__offset--wrapper">
                        <div class="card__offset--content">
                            <h4 class="card__offset--title">{props.text}</h4>
                        </div>
                    </div>
                </div>

                <div class="card__offset--back"></div>
            </div>
        </button>
    )
}

export default Card;