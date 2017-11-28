import React, { Component } from 'react';

import {
	NavLink,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import Cat from './Cat';
import Dog from './Dog';
import PresetLink from './PresetLink';
import NotFound from './NotFound';
import Sun from './Sun';


const MainNav = props => {

	// onClickPerformSearch = event => {
	// }

	return (
		<nav className="main-nav">
			<ul>
				{/* <Route path="/" render={ () => <PresetLink title="Cat" onClick={this.handleClick} /> } />
						(e.target.text)
				<Route path="/" render={ () => <PresetLink title="Dog" onClick={this.handleClick} /> } />

				<Route path="/" render={ () => <PresetLink title="Sun" onClick={this.handleClick} /> } /> */}

				<PresetLink title="Cat" performSearch={props.performSearch} />

				<PresetLink title="Dog" performSearch={props.performSearch} />

				<PresetLink title="Sun" performSearch={props.performSearch} />

				<Route path="/notfound" component={NotFound} />
			</ul>
		</nav>
	);
};

export default MainNav;
