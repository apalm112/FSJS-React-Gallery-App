import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Dog = (props) => {
	let item = props.title;
	return (
		// <li><Link to={props.title} onClick={props.performSearch(item)} >{props.title}</Link></li>
		<li><NavLink
			to={`${item}`}
			onClick={() => props.performSearch(`${item}`)}
			activeClassName="active">
			{item}
		</NavLink></li>
	);
};
Dog.propTypes = {
	title: PropTypes.string.isRequired,
};

Dog.defaultProps = {
	// This property allows the search/display/results to be changed from Dog to anything else in this one spot.
	title: 'Dog',
};

export default Dog;
