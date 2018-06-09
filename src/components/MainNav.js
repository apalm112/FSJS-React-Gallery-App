import React from 'react';
import PropTypes from 'prop-types'
import {
NavLink,
Route
} from 'react-router-dom';

import Featured from './Featured';

const MainNav = (props) => {
	return (
		<nav className="main-nav">
			<ul>
				<li><NavLink
					to="/Wave"
					onClick={() => props.performSearch('Wave')} >
					Wave
				</NavLink></li>
				<li><NavLink
					to="/Black Labrador"
					onClick={() => props.performSearch('Black Labrador')} >
					Black Labrador
				</NavLink></li>
				<li><NavLink
					to="/Pizza"
					onClick={() => props.performSearch('Pizza')} >
					Pizza
				</NavLink></li>
			</ul>

			{/* Write routes here...
				These work, but w/ Bug of repeated performSearch() calls.*/}
			<Route path="/wave" render={ () => <Featured title="Wave" onClick={props.performSearch('wave')} /> } />

			<Route path="/black labrador" render={ () => <Featured title="Black Labrador" onClick={props.performSearch('Black Labrador')} /> } />

			<Route path="/pizza" render={ () => <Featured title="Pizza for hobos" onClick={props.performSearch('Pizza')} /> } />

		</nav>
	);
};

MainNav.propTypes = {
	performSearch: PropTypes.func.isRequired,
};

export default MainNav;
