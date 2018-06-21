import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import SearchForm from './SearchForm';

const MainNav = (props) => {
	// MainNav is a stateless component written using an arrow function, when describing a component using a function you can access props by passing the function the props object via the props argument.
	return (
		<header>
			{/* This Route does not render the SearchForm component when a MainNav link is clicked.  */}
			<Route path="/search" render={ () => <SearchForm props={props} /> } />
			<nav className="main-nav">
				<ul>
					<li><NavLink
						// The to="" prop controls what displays in the URL.
						to="/Wave">Wave</NavLink></li>
					<li><NavLink
						to="/Black Lab">Black Lab</NavLink></li>
					<li><NavLink
						to="/Pizza">Pizza</NavLink></li>
					<li><NavLink
							to="/Search">Search</NavLink></li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNav;
