import React, { useRef } from 'react';
import PropTypes from "prop-types";

export const PageHeaderAlt = ({children, background, className, overlap}) => {
	const ref = useRef(null);
	
	const getStyle = () => {
		let style = { backgroundImage: background ? `url(${background})` : 'none' } 
		
		return style
	}

	return (
		<div
			ref={ref}
			className={`page-header-alt ${className ? className : ''} ${overlap && 'overlap'}`} 
			style={getStyle()}
		>
			<div className="container">{children}</div>
		</div>
	)
}

PageHeaderAlt.propTypes = {
  children: PropTypes.node,
	background: PropTypes.string,
	className: PropTypes.string,
	overlap: PropTypes.bool
};


export default PageHeaderAlt;