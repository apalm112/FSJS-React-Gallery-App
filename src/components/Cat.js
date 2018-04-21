import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Cat = (props) => {
	let item = props.title;
	console.log('OVER HERE LEONARD!');
	return (
		// <li><Link to={props.title} onClick={props.performSearch(item)} >{props.title}</Link></li>
		<li><NavLink
			activeClassName="active"
			to={`${item}`}
			onClick={() => props.performSearch(`${item}`)}>
			{item}
		</NavLink></li>
	); // end return
};
Cat.propTypes = {
	title: PropTypes.string.isRequired,
};

Cat.defaultProps = {
	// This property allows the search/display/results to be changed from Cat to anything else in this one spot.
	title: 'Cat',
};

export default Cat;
