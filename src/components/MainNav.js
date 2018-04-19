import React
 // { Component }
from 'react';
import PropTypes from 'prop-types'
import {
	// NavLink,
	Route,
	// Redirect,
	// Switch
} from 'react-router-dom';

// import Cat from './Cat';
// import Dog from './Dog';
import Featured from './Featured';
import NotFound from './exceeds/NotFound';
// import Sun from './Sun';

const MainNav = props => {
	return (
		<nav className="main-nav">
			<ul>
				{/* <Cat title="Burrito" performSearch={props.performSearch} />
				<Dog title="Dog" performSearch={props.performSearch} />
				<Sun title="Sun" performSearch={props.performSearch} /> */}
				{/*			Can These Components be used in place of the other 3? Cat,Dog,Sun			*/}
{/* The title property allows the search/display/results to be changed from Cat to anything else in this one spot. */}
				<Featured title="Robots" performSearch={props.performSearch} />
				<Featured title="Science" performSearch={props.performSearch} />
				<Featured title="Plasma" performSearch={props.performSearch} />
			</ul>
		</nav>
	);
};

MainNav.propTypes = {
	performSearch: PropTypes.func.isRequired,
};

export default MainNav;
