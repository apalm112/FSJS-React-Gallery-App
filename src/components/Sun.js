import React from 'react';
import { Link } from 'react-router-dom';

const Sun = (props) => {
	return (
		<li><Link to="/sun">{props.title}</Link></li>
	);
};

export default Sun;
