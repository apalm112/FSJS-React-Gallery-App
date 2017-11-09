import React, { Component } from 'react';
import axios from 'axios';

import '../css/App.css';
import PhotoList from '../components/PhotoList';
import SearchForm from '../components/SearchForm';

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
		axios.get(`http://api.giphy.com/vi/gifs/search?1=${query}&limit=4&api_key=dc6zaTOxFJmzC`)
		.then(response => {
			this.setState({
				photos: response.data.data,
				loading: false
			});
		})
		.catch(error => {
			console.log("Error fetching and parsing data", error);
		})
	}

  render() {
		console.log(this.state.photos);
    return (
      <div className="container">
					<SearchForm onSearch={this.performSearch} />
				<nav className="main-nav">
					<ul>
						<li><a href="">Cats</a></li>
						<li><a href="">Dogs</a></li>
						<li><a href="">Computers</a></li>
					</ul>
				</nav>

				<div className="photo-container">
					<h2>Results</h2>
					{
						(this.state.loading)
						? <p>Loading...........</p>
						: <PhotoList data={this.state.data} />
					}
				</div>
      </div>
    );
  }
}

// export default App;
