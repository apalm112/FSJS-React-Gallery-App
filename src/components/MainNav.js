import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Featured from './Featured';

const MainNav = (props) => {
	return (
		<nav className="main-nav">
			<ul>
				<li><NavLink
					// The to="" prop controls what displays in the URL.
					to="/Wave">Wave</NavLink></li>
				<li><NavLink
					to="/Black Labrador">Black Labrador</NavLink></li>
				<li><NavLink
					to="/Pizza">Pizza</NavLink></li>
			</ul>
		</nav>
	);
};

export default MainNav;
