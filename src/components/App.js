import React from 'react';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';

// App Components
import Container from './Container';
import FourZeroFour from './exceeds/FourZeroFour';
import MainNav from './MainNav';

const App = () => (
	// TODO: Add in comments for how everything is working!
	<BrowserRouter>
		{/* BrowserRouter renders the root router that listens to URL changes & provides other React router components information about the current URL & which components to render, that way your UI is always in sync w/ the URL. */}
		<div className="container">
			<Route component={MainNav} />
			{/* Path indicates the URL to match & component specifies which React component to render when the URL matches the route path. */}
			<Switch>
				<Route exact path= "/" render={ () => <Redirect to={'/search'} /> } />
				 {/* you pass it a function that returns a component. One of the main reasons to use the render prop over the component prop is when you need to pass props to the component you're rendering. Da in React we pass data to components via attributes called props.  Props are how components talk to each other. Props passed to a component can be used to render dynamic content. */}
				<Route exact path="/search" component={Container} />
				<Route path="/search/:searchText" component={Container} />
				<Route path="/Wave" render={ () => { return <Container searchText={'Wave'} /> } } />
				<Route path="/Black Lab" render={ () => { return <Container searchText={'Black Lab'} /> } } />
				<Route path="/Pizza" render={ () => { return <Container searchText={'Pizza'} /> } } />
				<Route path="/Search" render={ () => { return <Container searchText={'Search'} /> } } />
				<Route component={FourZeroFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
