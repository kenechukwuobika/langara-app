import React from 'react';
import { 
	StarFillIcon,
    StarEmptyIcon,
} from 'assets/svg';

const Rating = props => {

    const displayRatings = () => {
        const arr = [];
        for(let i= 0; i < 5; i++){
            if(i+1 <= props.rating){
                arr.push(<StarFillIcon key={i} />)
            }
            else{
                arr.push(<StarEmptyIcon key={i} />)
            }
        }
        return arr;
    }

    return (
    <React.Fragment>
        {displayRatings()}
    </React.Fragment>
    )
}

export default Rating;