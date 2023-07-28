const Heading = props => {

    const { text, color } = props;

    return (
        <div className="heading__container">
            <h2 className="heading" style={{ color }}>{text}</h2>
            <div className="heading__line"></div>
        </div>
    )
}

export default Heading;