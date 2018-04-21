import React
// { Component }
from 'react';
import PropTypes from 'prop-types'
import {
// NavLink,
// Route,
// Redirect,
// Switch
} from 'react-router-dom';

// import axios from 'axios';

// import Cat from './Cat';
// import Dog from './Dog';
import Featured from './Featured';
// import Sun from './Sun';

const MainNav = props => {


/*********************************************************************************/
	// TODO: You should do all data fetching from a container component that passes the data down to presentational components responsible for displaying images!
	// ** A container component that takes in a keyword and api key as props, and fetches the photos and other required information from the API
	// const results = props.passFlickrPhotos;
	//			<h2>{props.searchText}</h2>
	//			onClick={props.thingToRenameSoFunctionGetsPassed} >
	//			Data fetched from a "container" component that passes data down to presentation component via props
	// this.performSearch.bind(this);
	// Default query value for initial page load.
	/*const performSearch = (query='tomato', flickrAPI) => {
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
				// console.log(this.state.flickrPhotos);
				console.log('searchText Value is: ', this.state.searchText);
			})
			.catch(error => {
				console.error('Error fetching & parsing the data.', error);
			});
	};*/
	/*********************************************************************************/


	return (
		<nav className="main-nav">
			<ul>
				{/* The title property allows the search/display/results to be changed from Cat to anything else in this one spot. */}
				{/* <Cat title="Ancient Rome" performSearch={props.performSearch} />
				<Dog title="Jupiter" performSearch={props.performSearch} />
				<Sun title="Horse" performSearch={props.performSearch} /> */}
				{/*  These Components be used in place of the other 3. Cat,Dog,Sun But the project rubric says use a different component for each category to display.			*/}
				<Featured title="Robots" performSearch={props.performSearch} />
				<Featured title="Black Labrador" performSearch={props.performSearch} />
				<Featured title="Mushrooms" performSearch={props.performSearch} />
			</ul>
		</nav>
	);
};

MainNav.propTypes = {
	performSearch: PropTypes.func.isRequired,
};

export default MainNav;
