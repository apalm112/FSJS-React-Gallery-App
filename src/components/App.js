import React from 'react';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';

// App Components
import Container from './Container';
import MainNav from './MainNav';

const App = () => (
	// TODO:
	// 			1) Fix SearchForm still displayed on routes it should not be displayed.
	// 			2) Add a working 404-Error route.
	<BrowserRouter>
		<div className="container">
			<Route component={MainNav} />
			<Switch>
				<Route exact path= "/" render={ () => <Redirect to={'/search'} /> } />
				<Route exact path="/search" component={Container} />
				<Route path="/search/:searchText" component={Container} />
				<Route path="/Wave" render={ () => { return <Container searchText={'Wave'} /> } } />
				<Route path="/Black Lab" render={ () => { return <Container searchText={'Black Lab'} /> } } />
				<Route path="/Pizza" render={ () => { return <Container searchText={'Pizza'} /> } } />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
