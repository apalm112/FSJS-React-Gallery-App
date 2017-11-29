import React from 'react';
import { NavLink } from 'react-router-dom';

const Featured = ( props, {match} ) => {
	let item = props.title;
	return (
		<li>
			<NavLink
				to={props.title}
				onClick={() => props.performSearch(item)}
			>
				{props.title}
			</NavLink>
		</li>
	);
};

export default Featured;


// {function() {props.onChange(-1);}}
