import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
	NavLink,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import Cat from './Cat';
import Dog from './Dog';
// import PresetLink from './PresetLink';
import NotFound from './NotFound';
import Sun from './Sun';


const MainNav = props => {

	// onClickPerformSearch = event => {
	// }

	return (
		<nav className="main-nav">
			<ul>
				<Route path="/" render={ () => <Cat title="Cat" onClick={this.performSearch} /> } />

				<Route path="/" render={ () => <Dog title="Dog" onClick={this.performSearch} /> } />

				<Route path="/" render={ () => <Sun title="Sun" onClick={this.performSearch} /> } />
{/*
				<PresetLink title="Cat" performSearch={props.performSearch} />
				<PresetLink title="Dog" performSearch={props.performSearch} />
				<PresetLink title="Sun" performSearch={props.performSearch} />
*/}

				<Route path="/notfound" component={NotFound} />
			</ul>
		</nav>
	);
};

export default MainNav;
