import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = (props, {match}) => {
	return (
		<nav className="main-nav">
			<ul>
				{/* This works, but same problem w/ page not refreshing photo data on browser button click:	*/}
				<li><NavLink
					to="/Cat"
					onClick={() => props.performSearch('Cat')}>
					Cat
				</NavLink></li>
				<li><NavLink
					to="/Dog"
					onClick={() => props.performSearch('Dog')}>
					Dog
				</NavLink></li>
				<li><NavLink
					to="/Sun"
					onClick={() => props.performSearch('Sun')}>
					Sun
				</NavLink></li>
			</ul>
		</nav>
	);
};

export default Navigation;
