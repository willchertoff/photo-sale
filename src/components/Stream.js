import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';

const propTypes = {
  images: PropTypes.array.isRequired,
};

const Stream = ({ images }) => {
  const masonryImages = images.map(image => (
    <li key={image.imageId} className="image-element-class">
      <img src={image.url} alt={image.Id} />
    </li>
  ));
  return (
    <div className="panel">
      <Masonry
        className={'my-gallery-class'}
      >
        {masonryImages}
      </Masonry>
    </div>
  );
};

Stream.propTypes = propTypes;

export default Stream;
