import React from 'react';

const NoPhotos = props => (
  <li className='not'>
    <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
		<h3>No Results Found</h3>
		<p>You search did not return any results. Please try again.</p>
  </li>
);

export default NoPhotos;
