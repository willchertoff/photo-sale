import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';
import Photo from '../components/Photo';

const propTypes = {
  items: PropTypes.array.isRequired,
  photoId: PropTypes.number,
  nextPhoto: PropTypes.object,
  prevPhoto: PropTypes.object,
};

class PhotoStreamContainer extends Component {
  mOptions = {
    itemSelector: '.image-item',
    percentPosition: true,
  };

  renderContent = () => {
    const { photoId, items, nextPhoto, prevPhoto } = this.props;
    const masonryImages = items.map(image => (
      <div key={image.imageId} className="image-item column small-12 medium-6 large-3">
        <Link to={`/photo/${image.imageId}`}>
          <img src={`/images/${image.url}`} alt={image.imageId} data-name={image.imageId} />
        </Link>
      </div>));
    return photoId ? (
      <Photo
        photoId={photoId}
        nextPhoto={nextPhoto}
        prevPhoto={prevPhoto}
      />
    ) : (
    <Masonry
      className={'gal'}
      options={this.mOptions}
    >
      {masonryImages}
    </Masonry>
    );
  }
  render() {
    return (
      <div className="panel">
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state, { params }) {
  const { images } = state;
  const { items } = images;
  const { photoId } = params;

  const nextPhoto = items[photoId] || null;
  const prevPhoto = items[photoId - 2] || null;

  return {
    nextPhoto,
    prevPhoto,
    photoId,
    items,
  };
}

PhotoStreamContainer.propTypes = propTypes;

export default connect(mapStateToProps)(PhotoStreamContainer);
