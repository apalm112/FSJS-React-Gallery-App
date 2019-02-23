import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = (props) => {
	// MainNav is a stateless component written using an arrow function, when describing a component using a function you can access props by passing the function the props object via the props argument.
	// The to="" prop controls what displays in the URL.
	return (
		<header>
			<nav className="main-nav">
				<ul>
					<li><NavLink to="/Wave">Wave</NavLink></li>
					<li><NavLink to="/Black Lab">Black Lab</NavLink></li>
					<li><NavLink to="/Pizza">Pizza</NavLink></li>
					<li><NavLink to="/Search">Search</NavLink></li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNav;
