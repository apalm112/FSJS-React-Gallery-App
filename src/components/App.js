import React, { Component } from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';
import axios from 'axios';

import '../css/App.css';
import flickrKeys from '../.myConfig.js';
import MainNav from './MainNav';
import NotFound from './NotFound';
import SearchForm from './SearchForm';
import Photo from './Photo';
import PhotoList from './PhotoList';


const PHOTOS = [
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
];


const PhotoContainer = (props) => {
		return (
			<div className="photo-container">
				<h2>Results</h2>
				<ul>
					<PhotoList1 />
					<PhotoList2 />
					<PhotoList3 />
					<PhotoList4 />
					{/* <NotFound /> */}
				</ul>
			</div>
		);
}

const PhotoList1 = (props) => {
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
}


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			loading: true,
		};
	}
		componentDidMount() {
			this.performSearch();
		}

		performSearch = (query = "space cats") => {
			axios.get(`http://flickr.?q=${query}&limit=12&api_key=${flickrKeys}`)
			.then(response => {
				this.setState({
					photos: response.data.data,
					loading: false,
				});
			})
			.catch(error => {
				console.error("Error fetching & parsing the data.", error);
			})
		}



	 render() {
    return (
			<BrowserRouter>
	      <div className="Container">
					<Route path="/"  />
					<SearchForm />

					<MainNav />

					<PhotoContainer />
					<PhotoList />

					<Route path="/NotFound" component={NotFound} />
	      </div>
			</BrowserRouter>
    );
	}
}
