import React, { Component } from 'react';

import axios from 'axios';

import flickrAPI from '../.myConfig';
import PhotoContainer from './PhotoContainer';

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flickrPhotos: [],
			isLoading: true,
			searchText: '',
		};
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

	componentDidMount() {
		this.performSearch();
	}

	componentWillReceiveProps(props) {
		(props.searchText)
		? this.performSearch(props.searchText)
		: this.performSearch(props.match.params.searchText)
	}

	componentWillMount() {
		this.performSearch();
	}

	render() {
		return (
			<div className="photo-container">
				<h2>{this.state.query}</h2>
				{(this.state.isLoading) ? <p>Loading...</p>
				: <PhotoContainer flickrPhotos={this.state.flickrPhotos}
				 									performSearch={this.performSearch} /> }
			</div>
		);
	}
}
