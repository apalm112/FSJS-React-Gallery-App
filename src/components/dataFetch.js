import React, { Component } from 'react';
import axios from 'axios';
import flickrAPI from '../.myConfig';


const dataFetch = (props) => {
	/*constructor(props) {
		super(props);
		this.state = {
			flickrPhotos: [],
			loading: true,
			searchText: '',
		};
	}*/
	/*	componentDidMount() {
			this.performSearch();
		}*/

	return(
		performSearch = (query = "clouds") => {
			axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPI}&tags=${query}&per_page=12&page=1&format=json&nojsoncallback=1`)
				.then(response => {
					let resFlickrData = response.data.photos.photo;
					this.setState({
						flickrPhotos: resFlickrData.map((photo) => {
							return {
								...photo,
							};
						}),
						loading: false,
						searchText: query,
					});
					console.log('searchText Value is: ', this.state.searchText);
				})
				.catch(error => {
					console.error("Error fetching & parsing the data.", error);
				});
		}
	);
};

export default dataFetch;
