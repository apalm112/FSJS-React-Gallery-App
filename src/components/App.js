import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import axios from 'axios';

import '../css/App.css';

// App Components
import flickrAPI from '../.myConfig';
import Loading from './exceeds/Loading';
import MainNav from './MainNav';
import FourZeroFour from './exceeds/FourZeroFour';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flickrPhotos: [],
			isLoading: true,
			searchText: '',
		};
	}
		componentDidMount() {
			this.performSearch();
			// this.setState({ isLoading: true });
		}

		// Default query value for initial page load.
		performSearch = (query='tomato') => {
			// this.setState({ isLoading: true }), () => {}
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

	changeLoading = () => {
		this.setState({
			isLoading: true,
		})
	}

	 render() {
    return (
			<BrowserRouter>
	      <div className="container">
						<Route exact path="/" render={ () => <SearchForm onSearch={this.performSearch} changeLoading={this.changeLoading} /> }/>
						<Route path="/" render={ () => <MainNav performSearch={this.performSearch} changeLoading={this.changeLoading} /> } />
						<Switch>
						{
							(this.state.isLoading)
								? <Route component={Loading} />
								:
								 <Route path="/" render={ () => <PhotoContainer passFlickrPhotos={this.state.flickrPhotos} searchText={this.state.searchText} /> } />
						}
						<Route component={FourZeroFour} />
					</Switch>
	      </div>
			</BrowserRouter>
    );
	}
}
