import React from 'react';
import PropTypes from 'prop-types';

import {
	NavLink,
	Route,
	Redirect
} from 'react-router-dom';

import Cat from './Cat';
import Dog from './Dog';
import Sun from './Sun';

const Navigation = (props, {match}) => {
	return (
		<nav className="main-nav">
			<ul>
				{/* <Route path="/" render={ () => <Featured title="Cat" performSearch={props.performSearch} /> } />
				<Route path="/" render={ () => <Featured title="Dog" performSearch={props.performSearch} /> } />
				<Route path="/" render={ () => <Featured title="Sun" performSearch={props.performSearch} /> } /> */}

				{/* This works, but same problem w/ page not refreshing photo data on browser arrow button click:	*/}

				<li><NavLink
					to="/Rabbit"
					onClick={() => props.performSearch('Rabbit')}>
					Rabbit
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


			{/* Trying Routes here */}
			{/*
			<Cat performSearch={props.performSearch} />
			<Dog performSearch={props.performSearch} />
			<Sun performSearch={props.performSearch} />
			*/}
			</ul>
		</nav>
	);
};

Navigation.PropTypes = {
	// performSearch: React.PropTypes.func.isRequired,
};

export default Navigation;
