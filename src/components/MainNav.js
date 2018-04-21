import React from 'react';
import PropTypes from 'prop-types'
import {
NavLink,
// Route,
// Redirect,
// Switch
} from 'react-router-dom';

import Featured from './Featured';

const MainNav = props => {
	return (
		<nav className="main-nav">
			<ul>
				{/* <Cat title="Ancient Rome" performSearch={props.performSearch} />
				<Dog title="Jupiter" performSearch={props.performSearch} />
				<Sun title="Horse" performSearch={props.performSearch} /> */}
				{/*  These Components be used in place of the other 3. Cat,Dog,Sun But the project rubric says use a different component for each category to display.*/}

				{/* The title property allows the search/display/results to be changed from Cat to anything else in this one spot. */}
				<Featured title="Wave" performSearch={props.performSearch.bind(this)} />
				<Featured title="Black Labrador" performSearch={props.performSearch.bind(this)} />
				<Featured title="Mushrooms" performSearch={props.performSearch.bind(this)} />

				{/* <li><NavLink to="/robots">Robots</NavLink></li> */}


			</ul>
		</nav>
	);
};

MainNav.propTypes = {
	performSearch: PropTypes.func.isRequired,
};

export default MainNav;
