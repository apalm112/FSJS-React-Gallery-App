import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cat = (props) => {
	return (
		<li><NavLink to="/cat" onClick={props.performSearch} >{props.title}</NavLink></li>
	);
};
/*Cat.propTypes = {
	title: React.PropTypes.string,
};*/

Cat.defaultProps = {
	title: 'Cat',
};

export default Cat;
