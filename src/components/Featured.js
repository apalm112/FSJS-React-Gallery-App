import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Featured = (props) => {
	let item = props.title;
	return (
		// BUG: 
		// Active class styling works w/ <Link>, does Not work w/ <NavLink>
		// But using <Link> causes the browser to infinite loop run performSearch() so
		// the app freezes up.
		// <li><Link to={props.title} onClick={props.performSearch(item)} >{props.title}</Link></li>
		/*<li><NavLink
			to={`${item}`}
			exact activeClassName="active"
			// activeStyle={{ backgroundColor: '#275270' }}
			onClick={() => props.performSearch(`${item}`)} >
			{item}
		</NavLink></li>*/
		
		<div>
		
		</div>
		
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
