import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';
import axios from 'axios';

import '../css/App.css';
import flickrAPI from '../.myConfig';
import FourZeroFour from './FourZeroFour';
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
			console.log('compDidMount is working');
		}

		performSearch = (query = "hiking") => {
			console.log('FUNCTION PASSED INTO COMPONENT....');
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
		buttonHandler(e) {
			e.preventDefault();
			e.target.style.backgroundColor = 'lime';
			console.log(e.target.text);
		}

		componentWillReceiveProps(nextProps) {
			this.performSearch();
			console.log("componentWillReceiveProps is working?");
		}

	 render() {
		// const { match } = this.props
    return (
			<BrowserRouter>
	      <div className="container">
					{/* <Switch> */}
						<Route exact path="/" render={ () => <SearchForm onSearch={this.performSearch} /> }/>

						<Navigation performSearch={this.performSearch} />

						<PhotoContainer passFlickrPhotos={this.state.flickrPhotos} searchText={this.state.searchText} />

						<Route path="/notfound404" render={ () => <FourZeroFour /> } />

					{/* </Switch> */}
	      </div>
			</BrowserRouter>
    );
	}
}






//
