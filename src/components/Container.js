import React, { Component } from 'react';

import axios from 'axios';

import flickrAPI from '../.myConfig';
import PhotoContainer from './PhotoContainer';
import Loading from './exceeds/Loading';

export default class Container extends Component {
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
		this.setState({ isLoading: true }), () => {}
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
				{(this.state.isLoading) ? <Loading />
				: <PhotoContainer flickrPhotos={this.state.flickrPhotos}
				 									performSearch={this.performSearch}
												 	searchText={this.state.searchText}/> }
			</div>
		);
	}
}
