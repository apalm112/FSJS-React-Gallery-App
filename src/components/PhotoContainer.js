import React from 'react';
import Photo from './Photo';
import NotFound from './exceeds/NotFound';

const PhotoContainer = props => {
	console.log('PROPS:   ', props.flickrPhotos);
	const pherters = props.flickrPhotos;
	// const results = props;
	console.log('searchText:  ', props.searchText);
	return (
		<div className="photo-container">
			<h2>{props.searchText}</h2>
			<ul>
				{
					pherters.length > 0
						? pherters.map((photo) =>
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
