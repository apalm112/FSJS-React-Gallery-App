import React from 'react';
import PropTypes from 'prop-types'
import {
NavLink,
Route,
// Redirect,
// Switch
} from 'react-router-dom';

import Featured from './Featured';

const MainNav = (props) => {
	return (
		<nav className="main-nav">
			<ul>
				{/* The title property allows the search/display/results to be changed from Cat to anything else in this one spot. */}
				{/* <Featured title="Wave" performSearch={props.performSearch.bind(this)} />
				<Featured title="Black Labrador" performSearch={props.performSearch.bind(this)} />
				<Featured title="Mushrooms" performSearch={props.performSearch.bind(this)} /> */}
				<li><NavLink to="/robots">Robots</NavLink></li>
				<li><NavLink to="/black labrador">Black Labrador</NavLink></li>
				<li><NavLink to="/pizza">Pizza</NavLink></li>
			</ul>

			{/* Write routes here...*/}
			<Route path="/robots" render={ () => <Featured title="Robots" onClick={props.performSearch('Robots')} /> } />
			<Route path="/black labrador" render={ () => <Featured title="Black Labrador" onClick={props.performSearch('Black Labrador')} /> } />
			<Route path="/pizza" render={ () => <Featured title="Pizza" onClick={props.performSearch('Pizza')} /> } />
		</nav>
	);
};

MainNav.propTypes = {
	performSearch: PropTypes.func.isRequired,
};

export default MainNav;
