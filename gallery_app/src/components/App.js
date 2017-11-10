import React from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';

import '../css/index.css';


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


const SearchForm = (props) => {
	return (
		<form className="search-form">
			<input type="search" placeholder="Search Flickr"/>
				<button type="submit" className="search-button">
					<svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
						<path d="M0 0h24v24H0z" fill="none"/>
					</svg>
				</button>
		</form>
	);
}

const MainNav = (props) => {
	return (
		<nav className="main-nav">
			<ul>
				<li><a href="">Cats</a></li>
				<li><a href="">Dogs</a></li>
				<li><a href="">Computers</a></li>
			</ul>
		</nav>
	);
}


const PhotoContainer = (props) => {
		return (
			<div className="photo-container">
				<h2>Results</h2>
				<ul>
					<PhotoList1 />
					<PhotoList2 />
					<PhotoList3 />
					<PhotoList4 />
					<NotFound />
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


const NotFound = (props) => {
	return (
		<li className="not-found">
			<h3>No Results Found</h3>
			<p>You search did not return any results. Please try again.</p>
		</li>
	);
}


const App = (props) => {
    return (
			<BrowserRouter>
	      <div className="Container">
					<Route path="/" component={} />
					<SearchForm />

					<MainNav />

					<PhotoContainer />

	      </div>
			</BrowserRouter>
    );
}

export default App;
