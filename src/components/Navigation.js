import React from 'react';

import {
	// Link,
	Route
} from 'react-router-dom';

// import Cat from './Cat';
// import Dog from './Dog';
// import Sun from './Sun';

import Featured from './Featured';

const Navigation = (props, {match}) => {
	// let item = props.title;
	return (
		<nav className="main-nav">
			<ul>
				<Route path="/" render={ () => <Featured title="Sauron" performSearch={props.performSearch} /> } />
				<Route path="/" render={ () => <Featured title="Dog" performSearch={props.performSearch} /> } />
				<Route path="/" render={ () => <Featured title="Sun" performSearch={props.performSearch} /> } />

				{/* <Featured title="Cat" performSearch={props.performSearch} />
				<Featured title="Dog" performSearch={props.performSearch} />
				<Featured title="Sun" performSearch={props.performSearch} /> */}

				{/* This works, but same problem w/ page not refreshing photo data on browser button click:
				<li><Link
					to="/Sauron"
					onClick={() => props.performSearch('Sauron')}>
					Sauron
				</Link></li>
				<li><Link
					to="/Dog"
					onClick={() => props.performSearch('Dog')}>
					Dog
				</Link></li>
				<li><Link
					to="/Sun"
					onClick={() => props.performSearch('Sun')}>
					Sun
				</Link></li>		*/}


			</ul>
		</nav>
	);
};

export default Navigation;
