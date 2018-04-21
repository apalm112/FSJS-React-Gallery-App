import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Featured = (props) => {
	let item = props.title;
	return (
		// <li><Link to={props.title} onClick={props.performSearch(item)} >{props.title}</Link></li>
		<li><NavLink
			activeClassName="active"
			to={`${item}`}
			activeStyle={{ backgroundColor: '#275270' }}
			onClick={() => props.performSearch(`${item}`)} >
			{item}
		</NavLink></li>
	);
};
Featured.propTypes = {
	title: PropTypes.string.isRequired,
};

Featured.defaultProps = {
	// The title property allows the search/display/results to be changed from 'rock'to anything else in this one spot.
	title: 'rock',
};

export default Featured;
