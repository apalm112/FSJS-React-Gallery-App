import React from 'react';
import Photo from './Photo';
import NotFound from './exceeds/NotFound';

const PhotoContainer = props => {
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
