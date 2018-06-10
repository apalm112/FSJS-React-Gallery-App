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
					</Switch>
	      </div>
			</BrowserRouter>
    );
	}
}
