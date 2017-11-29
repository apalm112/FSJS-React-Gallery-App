import React from 'react';

import {
	Route,
} from 'react-router-dom';

// import Cat from './Cat';
// import Dog from './Dog';
// import Sun from './Sun';

import Featured from './Featured';

const MainNav = (props, {match}) => {

	// onClickPerformSearch = event => {
	// }

	return (
		<nav className="main-nav">
			<ul>
				<Route path="/" render={ () => <Featured title="Sauron" performSearch={props.performSearch} /> } />
				<Route path="/" render={ () => <Featured title="Dog" performSearch={props.performSearch} /> } />
				<Route path="/" render={ () => <Featured title="Sun" performSearch={props.performSearch} /> } />

				{/* <Featured title="Cat" performSearch={props.performSearch} />
				<Featured title="Dog" performSearch={props.performSearch} />
				<Featured title="Sun" performSearch={props.performSearch} /> */}

				{/*
								<li><NavLink
									to="/Sauron"
									onClick={() => props.performSearch()}>
									Sauron
									</NavLink></li>
								<li><NavLink
									to="/Dob"
									onClick={() => props.performSearch()}>
									Dog
									</NavLink></li>
								<li><NavLink
									to="/Sun"
									onClick={() => props.performSearch()}>
									Sun
									</NavLink></li> */}


			</ul>
		</nav>
	);
};

export default MainNav;
