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


/*const PHOTOS = [
	{
		src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
		id: "1",
	},
	{
		src: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
		id: "2",
	},
	{
		src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
		id: "3",
	},
	{
		src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
		id: "4",
	},
];*/

// const PhotoContainer = (props) => {
// 		return (
// 			<div className="photo-container">
// 				<h2>Results</h2>
// 				<ul>
// 					<PhotoList1 />
// 					<PhotoList2 />
// 					<PhotoList3 />
// 					<PhotoList4 />
// 					{/* <NotFound /> */}
// 				</ul>
// 			</div>
// 		);
// }
/*const PhotoList1 = (props) => {
	return (
		<li>
			<img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
		</li>
	);
}
const PhotoList2 = (props) => {
	return (
		<li>
			<img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
		</li>
	);
}
const PhotoList3 = (props) => {
	return (
		<li>
			<img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
		</li>
	);
}
const PhotoList4 = (props) => {
	return (
		<li>
			<img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
		</li>
	);
}*/


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
					<PhotoList
						passFlickrPhotos={this.state.flickrPhotos}
					/>

					<Route path="/NotFound" component={NotFound} />
	      </div>
			</BrowserRouter>
    );
	}
}
