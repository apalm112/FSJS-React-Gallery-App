import React from 'react';
import { NavLink } from 'react-router-dom';

const Sun = (props) => {
	return (
		<li><NavLink to="/sun">{props.title}</NavLink></li>
	);
};

export default Sun;
