import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';

const propTypes = {
  images: PropTypes.array.isRequired,
};

class Stream extends Component {
  render() {
    const { images } = this.props;
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
  }
}

Stream.propTypes = propTypes;

export default Stream;
