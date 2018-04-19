import React, { Component } from 'react';
import {
	BrowserRouter,
	// Redirect,
	Route,
	Switch
} from 'react-router-dom';
import axios from 'axios';

import '../css/App.css';

// App Components
// import DataFetch from './DataFetch';
import flickrAPI from '../.myConfig';
// import fourZeroFour from './exceeds/FourZeroFour';
import Loading from './exceeds/Loading';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flickrPhotos: [],
			loading: true,
			searchText: '',
		};
	}
		componentDidMount() {
			this.performSearch();
		}
		// TODO: You should do all data fetching from a container component that passes the data down to presentational components responsible for displaying images!
		// const results = props.passFlickrPhotos;
		//			<h2>{props.searchText}</h2>
		//			onClick={props.thingToRenameSoFunctionGetsPassed} >
		//			Data fetched from a "container" component that passes data down to presentation component via props
		// Default query value for initial page load.
		performSearch = (query='tomato') => {
			axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPI}&tags=${query}&per_page=12&page=1&format=json&nojsoncallback=1`)
			.then(response => {
				let resFlickrData = response.data.photos.photo;
					this.setState({
					flickrPhotos: resFlickrData.map((photo) => {
						return {
							...photo,
						}
					}),
					loading: false,
					searchText: query,
				})
				console.log('searchText Value is: ', this.state.searchText);
			})
			.catch(error => {
				console.error("Error fetching & parsing the data.", error);
			})
		}

	 render() {
    return (
			<BrowserRouter>
	      <div className="container">

						<Route exact path="/" render={ () => <SearchForm onSearch={this.performSearch} /> }/>

						<MainNav performSearch={this.performSearch} />

						<Switch>

						{
							(this.state.loading)
								? <Loading />
								: <Route path="/" render={ () =><PhotoContainer passFlickrPhotos={this.state.flickrPhotos} searchText={this.state.searchText} /> } />
						}

						{/*  Commented out da Not working. <Redirect to="/404" component={fourZeroFour} /> */}
					</Switch>
	      </div>
			</BrowserRouter>
    );
	}
}
