import React, { Component } from 'react';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import axios from 'axios';

import '../css/App.css';
import flickrAPI from '../.config';
import fourZeroFour from './FourZeroFour';
import Loading from './Loading';
import Navigation from './Navigation';
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

		performSearch = (query = "clouds") => {
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

						<Route path="/" render={ () => <Navigation performSearch={this.performSearch} /> } />
						<Switch>

						{
							(this.state.loading)
								? <Loading />
								: <Route path="/" render={ () =><PhotoContainer passFlickrPhotos={this.state.flickrPhotos} searchText={this.state.searchText} /> } />
						}

						<Redirect to="/notfound" component={fourZeroFour} />

					</Switch>
	      </div>
			</BrowserRouter>
    );
	}
}
