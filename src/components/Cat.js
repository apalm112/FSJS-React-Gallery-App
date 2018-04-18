import React from 'react';
import { Link } from 'react-router-dom';

const Cat = (props) => {
	let item = props.title;
	return (
		<li><Link to={props.title} onClick={props.performSearch(item)} >{props.title}</Link></li>
	);
};

export default Cat;
