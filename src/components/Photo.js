import React from 'react';

// A stateless functional component to display the photos.
const Photo = props =>
	<li>
		<img src={ `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg` } alt={props.title} />
	</li>;

export default Photo;
