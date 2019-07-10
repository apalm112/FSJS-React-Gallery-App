import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import flickrAPI from '../myConfig';
import Loading from './exceeds/Loading';
import NotFound from './exceeds/NotFound';
import SearchForm from './SearchForm';
import Photo from './Photo';

// Makes the API call.
import axios from 'axios';

// Creates a new Componet Class & exports it.
export default class Container extends Component {
	// The constructor creates & holds the state for the App.
	constructor(props) {
		super(props);
		this.state = {
			apiKey: process.env.REACT_APP_API_KEY,
			flickrPhotos: [],
			isLoading: false,
			searchText: '',
		};
	}

	// Default query value for initial page load.
	performSearch = (query='tomato') => {
		// Change isLoading to true so the Loading Spinner will be displayed.
		this.setState({ isLoading: true })
			axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.apiKey}&tags=${query}&per_page=12&page=1$safe_search=1&format=json&nojsoncallback=1`)
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
/*	componentDidUpdate(prevProps, prevState) {
		if (this.props.searchText !== prevProps.searchText) {
			this.performSearch(this.props.searchText);
		} // NOT WORKING
	*/
	UNSAFE_componentWillReceiveProps(props) {
		(props.searchText)
		? this.performSearch(props.searchText)
		: this.performSearch(props.match.params.searchText)
	}

	render() {
		const results = this.state.flickrPhotos;
			return (
				<div className="photo-container">
				<Route path="/search" render={ () => <SearchForm onSearch={this.performSearch} props={this.props} />} />
					{ (this.state.isLoading) ? <Loading />
						: <div className="photo-container">
								<h2>{this.state.searchText}</h2>
								<ul>
									{
										results.length > 0
											? results.map((photo) =>
												<Photo
													farm={photo.farm}
													server={photo.server}
													secret={photo.secret}
													id={photo.id}
													key={photo.id}
												/>)
											: <NotFound query={this.state.searchText}/>
									}
								</ul>
							</div>
					}
				</div>
			);
		}
}
