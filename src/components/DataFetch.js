import React from 'react';

const DataFetch = (props) => {

		// TODO: You should do all data fetching from a container component that passes the data down to presentational components responsible for displaying images!
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
				// console.log(this.state.flickrPhotos);
				console.log('searchText Value is: ', this.state.searchText);
			})
			.catch(error => {
				console.error("Error fetching & parsing the data.", error);
			})
		}
	// return (
	//
	// );
};

export default DataFetch;
