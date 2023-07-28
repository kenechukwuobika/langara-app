import img from '../assets/images/ryan-hoffman-Ft4p5E9HjTQ-unsplash.png'

const Member = (props) => {

    return(
        <div className="member">
            <img className="member__img" src={img} alt={props.img} />
            <h4 className="member__name">{props.name}</h4>
            <p className="member__title">{props.title}</p>
            <p className="member__description">{props.description}</p>
        </div>
    )
}

export default Member;