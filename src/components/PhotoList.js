import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
	const results = props.passFlickrPhotos;
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
		photos = <NotFound />
	}

		return (
			<ul className="photo-container">
				{/* {props.passFlickrPhotos.map((prop, index) =>
					<Photo
						farm={prop.farm}
						server={prop.server}
						secret={prop.secret}
						id={prop.id}
						key={prop.id}
					/>
				)} */}
				{photos}
			</ul>
		);
}

export default PhotoList;
