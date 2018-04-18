import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch
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

		performSearch = (query = "hiking") => {
			axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPI}&tags=${query}&per_page=12&page=1&format=json&nojsoncallback=1`)
			.then(response => {
				let resFlickrData = response.data.photos.photo;
					this.setState({
					flickrPhotos: resFlickrData.map((photo) => {
						return {
							...photo,
							loading: false,
							searchText: query,
						}
					})
				})
				// console.log(this.state.flickrPhotos);
			})
			.then(response => {})
			.catch(error => {
				console.error("Error fetching & parsing the data.", error);
			})
		}
		// buttonHandler(e) {
		// 	// e.preventDefault();
		// 	e.target.style.backgroundColor = 'lime';
		// 	console.log(e.target.text);
		// }

	 render() {
    return (
			<BrowserRouter>
	      <div className="Container">
						<Route path="/" render={ () => <SearchForm onSearch={this.performSearch} /> }/>

						<Route render={ () => <MainNav onClick={this.performSearch} /> } />

						{/* <MainNav performSearch={this.performSearch} /> */}

						<Switch>
						<div className="photo-container">

							<PhotoList passFlickrPhotos={this.state.flickrPhotos} />

						</div>
						<Route path="/NotFound" component={NotFound} />
					</Switch>
	      </div>
			</BrowserRouter>
    );
	}
}






//
