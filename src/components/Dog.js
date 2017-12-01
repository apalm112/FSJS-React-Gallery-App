import React from 'react';
import { Link } from 'react-router-dom';

const Dog = (props) => {
	return (
		<li><Link to="/dog">{props.title}</Link></li>
	);
};

export default Dog;
