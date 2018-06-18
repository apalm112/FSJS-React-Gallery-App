import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchForm from './SearchForm';

const MainNav = (props) => {
	return (
		<header>
			<SearchForm props={props} />
			<nav className="main-nav">
				<ul>
					<li><NavLink
						// The to="" prop controls what displays in the URL.
						to="/Wave">Wave</NavLink></li>
					<li><NavLink
						to="/Black Lab">Black Lab</NavLink></li>
					<li><NavLink
						to="/Pizza">Pizza</NavLink></li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNav;
