import React from 'react';
import { Link } from 'react-router-dom';

const Featured = ( props ) => {
	let item = props.title;
	// const {activity} = this.props;
	return (
		<li>
			<Link
				to={props.title}
				onClick={() => props.performSearch(item)}
			>
				{props.title}
			</Link>
		</li>
	);
};

export default Featured;


// {function() {props.onChange(-1);}}
