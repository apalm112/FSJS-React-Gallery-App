import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';

import NotFound from '../components/NotFound';
import PhotoList from '../components/PhotoList';
import SearchForm from '../components/SearchForm';


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
	// Declare the state object.
	constructor() {
		super();
		this.state = {
			photos: [],
			loading: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = "space cats") => {
		axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=dc6zaTOxFJmzC`)
		.then(response => {
			this.setState({
				photos: response.data.data,
				loading: false
			});
		})
		.catch(error => {
			console.error("Error fetching and parsing data", error);
		})
	}

  render() {
		console.log(this.state.photos);
    return (
      <div className="photo-container">
					<SearchForm onSearch={this.performSearch} />
				<nav className="main-nav">
					<ul>
						<li><a href="">Cats</a></li>
						<li><a href="">Dogs</a></li>
						<li><a href="">Computers</a></li>
					</ul>
				</nav>
				<div className="photo-container">
					{
						(this.state.loading)
						? <p>Loading...........</p>
						: <PhotoContainer />
					}
				</div>
				<NotFound />
      </div>
    );
  }
}
