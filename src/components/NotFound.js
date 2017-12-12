import React from 'react';

const NotFound = props => (
	<li className='not-found'>
		<i className="material-icons icon-gif not-found">sentiment_very_dissatisfied</i>
		<h3>No Results Found for {props.query}.</h3>
		<p>You search did not return any results. Please try again.</p>
	</li>
);

export default NotFound;
