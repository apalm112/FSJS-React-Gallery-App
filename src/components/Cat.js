import React from 'react';
import { NavLink } from 'react-router-dom';

const Cat = (props) => {
	return (
		<li><NavLink to={props.title} onClick={this.performSearch} >{props.title}</NavLink></li>
	);
};

export default Cat;
