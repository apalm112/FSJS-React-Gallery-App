import React from 'react';
import Photo from './Photo';
// import NotFound from './NotFound';

const PhotoList = props => {
/*	const results = props.passFlickrPhotos;
	console.log("RESULTS: ", results);
	let photos = '';
	if (results.length > 0) {
		photos = results.map(photo => <Photo url={photo.images.fixed_height.url} key={photo.id} />);
	} else {
		photos = <NotFound />
	}
*/
		return (
			<ul>
				{props.passFlickrPhotos.map((prop, index) =>
					<Photo
						farm={prop.farm}
						server={prop.server}
						secret={prop.secret}
						id={prop.id}
						key={prop.id}
					/>
				)}
			</ul>
		);
}

export default PhotoList;
