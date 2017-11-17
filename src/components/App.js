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
			// this.performSearch();
			// Sauce: https://www.flickr.com/services/api/misc.urls.html
			// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg


			axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPI}&tags=cats&per_page=5&page=1&format=json&nojsoncallback=1`)
			.then(response => {
				let resFlickrData = response.data.photos.photo;
					this.setState({
					flickrPhotos: resFlickrData.map((photo) => {
						return {
							...photo
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

		performSearch = (query = "space cats") => {}

	 render() {
    return (
			<BrowserRouter>
	      <div className="Container">
					<Route path="/"  />
					<SearchForm />

					<MainNav />

					{/* <PhotoContainer /> */}
					<div className="photo-container">
						<PhotoList
							passFlickrPhotos={this.state.flickrPhotos}
						/>
					</div>
					<Route path="/NotFound" component={NotFound} />
	      </div>
			</BrowserRouter>
    );
	}
}
