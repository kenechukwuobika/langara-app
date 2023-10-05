import React from "react";

import Utils from "utils";

class PriceFilter extends React.Component {
    state = {
        mouseDown: false,
        minPrice: 0,
        maxPrice: 150,
        setPrice: 150,
        priceGap: 10
    }

    componentDidMount(){
        document.addEventListener('mouseup', this.onMouseUp)
    }

    componentDidUpdate(){
        document.addEventListener('mouseleave', this.onMouseUp)
    }

    componentWillUnmount(){
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mouseleave', this.onMouseUp)
    }

    onMouseDown = () => {
        this.setState({ mouseDown: true })
    }

    onMouseUp = () => {
        this.setState({ mouseDown: false })
    }

    moveLeftHandle = (e) => {
        
        if(this.state.mouseDown === true){
            const emptyBar = e.target.parentNode.parentNode;
            const filterBar = e.target.parentNode;
            const bounds = emptyBar.getBoundingClientRect();
            let clientX = e.clientX - bounds.left;
            
            if(clientX <= 0) clientX = 0;
            if(clientX > emptyBar.offsetWidth) clientX = emptyBar.offsetWidth;
            clientX = Math.floor(clientX);
            if(this.state.maxPrice - this.state.minPrice >= this.state.priceGap ){
                filterBar.style.marginLeft = `${clientX}px`;   
            }
            let pricePercentage = (clientX/emptyBar.offsetWidth);
            let price = Math.round((this.state.setPrice * pricePercentage));
            this.props.onChangeMinPrice(price)
        }

    }

    moveRightHandle = (e) => {
        if(this.state.mouseDown === true){
            let pricePercentage = 0;
            let price = 0;
            const emptyBar = e.target.parentNode.parentNode;
            const filterBar = e.target.parentNode;
            const bounds = emptyBar.getBoundingClientRect();
            let clientX = bounds.right - e.clientX;
            
            if(clientX <= 0) clientX = 0;
            if(clientX > emptyBar.offsetWidth) clientX = emptyBar.offsetWidth;
            clientX = Math.floor(clientX);
        
            if(this.state.maxPrice - this.state.minPrice >= this.state.priceGap ){
                filterBar.style.marginRight = `${clientX}px`;
            }else{
                let maxPrice = this.state.minPrice +  this.state.priceGap;
                this.props.onChangeMaxPrice(maxPrice)
            }
            pricePercentage = (clientX/emptyBar.offsetWidth);
            price = Math.round(this.state.setPrice - (this.state.setPrice * pricePercentage));
            this.props.onChangeMaxPrice(price)
        }
    }

    render(){
        return(
            <div className="filter" 
                // onMouseDown={this.preventDefault} 
                // onTouchStart={this.preventDefault} 
                // onMouseMove={this.preventDefault}
                // onTouchMove={this.preventDefault}
            >
            
            <div className="empty__bar">
                    <div className="filter__bar" ref={el => this.filterBar = el }>
                        <div 
                            onMouseMove={this.moveLeftHandle} 
                            onMouseUp={this.onMouseUp}
                            onMouseDown={this.onMouseDown}
                            onTouchMove={this.moveLeftHandle} 
                            onTouchStart={this.onMouseDown} 
                        className="leftHandle">
                        </div>

                        <div 
                            onMouseMove={this.moveRightHandle} 
                            onMouseUp={this.onMouseUp}
                            onMouseDown={this.onMouseDown}
                            onTouchMove={this.moveLeftHandle} 
                            onTouchStart={this.onMouseDown}
                        className="rightHandle"></div>
                    </div>
            </div>
                <div className="filter__bottom">
                        <div className="prices">
                            <span className="t-18 mb-0">Price: </span>
                            <span className="min__price t-18 mb-0">${Utils.formatNumber(this.props.minPrice)}</span>
                            <span className="min__price t-18 mb-0"> - </span>
                            <span className="max__price t-18 mb-0">${Utils.formatNumber(this.props.maxPrice)}</span>
                        </div>
                </div>
            </div>
        
        )
    }
}

export default PriceFilter;