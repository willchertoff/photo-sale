import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

const propTypes = {
  items: PropTypes.array.isRequired,
};

class PhotoStreamContainer extends Component {
  mOptions = {
    itemSelector: '.image-item',
    percentPosition: true,
  };
  handleClick() {
    /* Do Nothing */
    return this;
  }
  render() {
    const { items } = this.props;
    const masonryImages = items.map(image => (
      <div key={image.imageId} className="image-item column small-12 medium-6 large-3">
        <img src={image.url} alt={image.imageId} data-name={image.imageId} />
      </div>
    ));
    return (
      <div className="panel">
        <Masonry
          className={'gal'}
          options={this.mOptions}
          onClick={this.handleClick}
        >
          {masonryImages}
        </Masonry>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { images } = state;
  const { items } = images;
  return {
    items,
  };
}

PhotoStreamContainer.propTypes = propTypes;

export default connect(mapStateToProps)(PhotoStreamContainer);
