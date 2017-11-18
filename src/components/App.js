import React, { Component } from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';
import axios from 'axios';

import '../css/App.css';
import flickrAPI from '../.myConfig.js';
import MainNav from './MainNav';
import NotFound from './NotFound';
import SearchForm from './SearchForm';
import PhotoList from './PhotoList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flickrPhotos: [],
			loading: true,
		};
	}
		componentDidMount() {
			this.performSearch();
		}

		performSearch = (query = "node.js") => {
			axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPI}&tags=${query}&per_page=12&page=1&format=json&nojsoncallback=1`)
			.then(response => {
				let resFlickrData = response.data.photos.photo;
					this.setState({
					flickrPhotos: resFlickrData.map((photo) => {
						return {
							...photo,
							loading: false,
						}
					})
				})
				console.log(this.state.flickrPhotos);
			})
			.then(response => {})
			.catch(error => {
				console.error("Error fetching & parsing the data.", error);
			})
		}

	 render() {
    return (
			<BrowserRouter>
	      <div className="Container">
					<Route path="/"  />
					<SearchForm onSearch={this.performSearch} />
					<MainNav />
					<div className="photo-container">
						<PhotoList passFlickrPhotos={this.state.flickrPhotos} />
					</div>
					<Route path="/NotFound" component={NotFound} />
	      </div>
			</BrowserRouter>
    );
	}
}
