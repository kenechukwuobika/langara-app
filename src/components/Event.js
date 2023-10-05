import { Link } from "react-router-dom";

const Event = (props) => {

    const { link, text } = props?.event || {};

    return (
        <li className="event__item">
           <p className="event__text">{text}</p>
           {!link && <Link to={link} className="event__link">view more</Link>}
        </li>
    )
}

export default Event; 