import React from 'react';
import Photo from './Photo';
import NotFound from './exceeds/NotFound';

const PhotoContainer = props => {
	const results = props.passFlickrPhotos;
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
