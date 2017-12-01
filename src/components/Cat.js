import React from 'react';
import { Link } from 'react-router-dom';

const Cat = (props) => {
	return (
		<li><Link to={props.title} onClick={props.performSearch('cat')} >{props.title}</Link></li>
	);
};

export default Cat;
