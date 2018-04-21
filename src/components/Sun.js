import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Sun = (props) => {
	let item = props.title;
	return (
		// <li><Link to={props.title} onClick={props.performSearch(item)} >{props.title}</Link></li>
		<li><NavLink
			to={`${item}`}
			onClick={() => props.performSearch(`${item}`)}>
			{item}
		</NavLink></li>
	);
};
Sun.propTypes = {
	title: PropTypes.string.isRequired,
};

Sun.defaultProps = {
	// This property allows the search/display/results to be changed from Sun to anything else in this one spot.
	title: 'Sun',
};

export default Sun;
