import React from 'react';

import SpaceCats from './SpaceCats';
import Doggo from './Doggo';
import FeelinLucky from './FeelinLucky';


const MainNav = (props) => {

		/*state = {}


	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	}*/



	return (
		<nav className="main-nav">
			<ul>
				<SpaceCats />
				<Doggo />
				<FeelinLucky />
			</ul>
		</nav>
	);
}

export default MainNav;
