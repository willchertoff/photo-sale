import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';

const propTypes = {
  items: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const Stream = ({ items, handleClick }) => {
  const masonryImages = items.map(image => (
    <div key={image.imageId} className="image-item">
      <img src={image.url} alt={image.imageId} data-name={image.imageId} />
      <p>{image.title}</p>
    </div>
  ));
  const mOptions = {
    itemSelector: '.image-item',
    percentPosition: true,
  };
  return (
    <div className="panel">
      <Masonry
        className={'gal'}
        options={mOptions}
        onClick={handleClick}
      >
        {masonryImages}
      </Masonry>
    </div>
  );
};

Stream.propTypes = propTypes;

export default Stream;
