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
					// The to="" prop controls what displays in the URL.
					to="/Wave"
					onClick={() =>{ props.performSearch('Wave'); props.changeLoading(); }} >
					Wave
				</NavLink></li>
				<li><NavLink
					to="/Black Labrador"
					onClick={() => {props.performSearch('Black Labrador'); props.changeLoading(); }} >
					Black Labrador
				</NavLink></li>
				<li><NavLink
					to="/Pizza"
					onClick={() => {props.performSearch('Pizza'); props.changeLoading(); }} >
					Pizza
				</NavLink></li>
			</ul>

			{/* Write routes here...
				These work, but w/ Bug of repeated performSearch() calls.  The render={() => allows the PhotoContainer to update to each respective nav link search title when using browser arrows.  */}
			<Route path="/wave" render={ () => <Featured title="Wave" onClick={props.performSearch('Wave')} /> } />

			<Route path="/black labrador" render={ () => <Featured title="Black Labrador" onClick={props.performSearch('Black Labrador')} /> } />

			<Route path="/pizza" render={ () => <Featured title="Pizza for hobos" onClick={props.performSearch('Pizza')} /> } />

		</nav>
	);
};

MainNav.propTypes = {
	performSearch: PropTypes.func.isRequired,
	changeLoading: PropTypes.func.isRequired,
};

export default MainNav;
