import React, { Component } from 'react';

import SpaceCats from './SpaceCats';
import Doggo from './Doggo';
import FeelinLucky from './FeelinLucky';


const MainNav = (props) => {
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
