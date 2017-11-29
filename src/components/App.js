import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';
import axios from 'axios';

import '../css/App.css';
import flickrAPI from '../.myConfig.js';
import FourZeroFour from './FourZeroFour';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';

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

		performSearch = (query = "stuff") => {
			console.log('FUNCTION PASSED INTO COMPONENT....');
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
				// console.log(this.state.flickrPhotos);
			})
			.then(response => {})
			.catch(error => {
				console.error("Error fetching & parsing the data.", error);
			})
		}
		buttonHandler(e) {
			// e.preventDefault();
			e.target.style.backgroundColor = 'lime';
			console.log(e.target.text);
		}

	 render() {
		// const { match } = this.props
    return (
			<BrowserRouter>
	      <div className="container">
					{/* <Switch> */}
						<Route exact path="/" render={ () => <SearchForm onSearch={this.performSearch} /> }/>
						<Route path="/" render={ () => <MainNav performSearch={this.performSearch} buttonHandler={this.buttonHandler} /> } />
						<Route path="/" render={ () => <PhotoContainer passFlickrPhotos={this.state.flickrPhotos} /> } />
						<Route path="/:notfound" component={FourZeroFour} />
					{/* </Switch> */}
	      </div>
			</BrowserRouter>
    );
	}
}






//
