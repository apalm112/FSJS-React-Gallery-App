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
				<Route component={FourZeroFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
