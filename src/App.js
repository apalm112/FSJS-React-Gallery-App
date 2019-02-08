import React, { Component } from 'react';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';

import axios from 'axios';

// App Components
import Container from './components/Container';
import ErrorBoundary from './components/ErrorBoundary';
import FourZeroFour from './components/exceeds/FourZeroFour';
import MainNav from './components/MainNav';

import flickrAPI from './myConfig';
import PhotoContainer from './components/PhotoContainer';
import Loading from './components/exceeds/Loading';

// TODO: Add in comments for how everything is working!
// Creates a new Componet Class & exports it.
export default class App extends Component {
	// The constructor creates & holds the state for the App.
	constructor(props) {
		super(props);
		this.state = {
			apiKey:flickrAPI,
			flickrPhotos: [],
			isLoading: false,
			searchText: '',
		};
	}

	// Default query value for initial page load.
	performSearch = (query='tomato') => {
		// Change isLoading to true so the Loading Spinner will be displayed.
		this.setState({ isLoading: true })
			axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPI}&tags=${query}&per_page=12&page=1&format=json&nojsoncallback=1`)
			.then(response => {
				let resFlickrData = response.data.photos.photo;
					this.setState({
					flickrPhotos: resFlickrData.map((photo) => {
						return {
							...photo,
						}
					}),
					isLoading: false,
					searchText: query,
				})
			})
			.catch(error => {
				console.error("Error fetching & parsing the data.", error);
			})
	}

	componentDidMount(props) {
		this.performSearch();
	}

	componentDidUpdate(prevProps, props) {
		if (prevProps.searchText !== this.props.searchText) {
			this.performSearch(props.searchText)
		}
	}

	render() {
		return (

			<BrowserRouter>
				{/* BrowserRouter renders the root router that listens to URL changes & provides other React router components information about the current URL & which components to render, that way your UI is always in sync w/ the URL. */}

				<div className="container">
				 <ErrorBoundary>

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
							{/* The 404 Route is created by leaving the path out, so all other paths will catch it & render the 404 Error Message. */}
						</Switch>

					</ErrorBoundary>

				</div>

			</BrowserRouter>
		);
	}
}
