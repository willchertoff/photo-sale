import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';

const propTypes = {
  images: PropTypes.array.isRequired,
};

const Stream = ({ images }) => {
  const masonryImages = images.map(image => (
    <div key={image.imageId} className="image-item">
      <img src={image.url} alt={image.Id} />
    </div>
  ));
  const mOptions = {
    itemSelector: '.image-item',
    percentPosition: true,
  }
  return (
    <div className="panel">
      <Masonry
        className={'gal'}
        options={mOptions}
      >
        {masonryImages}
      </Masonry>
    </div>
  );
};

Stream.propTypes = propTypes;

export default Stream;
