import React from 'react';
import { NavLink } from 'react-router-dom';

const PresetLink = ( props, {match} ) => {
	let item = props.title;
	return (
		<li>
			<NavLink
				to={props.title}
				// onClick={ () => {this.handleClick} }
				onClick={() => props.performSearch(item)}
			>
				{props.title}
			</NavLink>
		</li>
	);
};

export default PresetLink;


// {function() {props.onChange(-1);}}
