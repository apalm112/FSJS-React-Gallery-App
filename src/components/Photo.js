import React from 'react';

const Photo = props =>
// A stateless component written using an arrow function, to display the photos.  When describing a component using a function you can access props by passing the function the props object via the props argument.
	<li>
		<img src={ `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg` } alt={props.title} />
	</li>;

export default Photo;
