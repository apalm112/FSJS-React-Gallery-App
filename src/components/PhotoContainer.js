import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => {
	// TODO:  A container component that takes in a keyword and api key as props, and fetches the photos and other required information from the API
	const results = props.passFlickrPhotos;
	/*
	  This works, but replaced it w/ the ternary operator inside the JSX below.
	let photos;
	if (results.length > 0) {
		photos = results.map((photo, index) =>
			<Photo
				farm={photo.farm}
				server={photo.server}
				secret={photo.secret}
				id={photo.id}
				key={photo.id}
			/>);
	} else {
		photos = <NotFound query={props.query}/>;

	}*/

	return (
		<div className="photo-container">
			<h2>{props.searchText}</h2>
			<ul>
				{
					results.length > 0
						? results.map((photo) =>
							<Photo
								farm={photo.farm}
								server={photo.server}
								secret={photo.secret}
								id={photo.id}
								key={photo.id}
							/>)
						: <NotFound query={props.searchText}/>
				}
			</ul>
		</div>
	);
};

export default PhotoContainer;
