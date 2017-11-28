import React from 'react';
import { NavLink } from 'react-router-dom';

const Dog = (props) => {
	return (
		<li><NavLink to="/dog">{props.title}</NavLink></li>
	);
};

export default Dog;
