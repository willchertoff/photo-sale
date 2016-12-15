import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ReactRpg } from 'react-rpg';
import Photo from '../components/Photo';
import WillStreamPic from '../components/WillStreamPic';

const propTypes = {
  photoId: PropTypes.any,
  nextPhoto: PropTypes.object,
  prevPhoto: PropTypes.object,
  router: PropTypes.object,
};

class PhotoStreamContainer extends Component {

  images = [
    {
      url: '/images/1.jpg',
      clickHandler: () => { this.props.router.push('/photo/1'); },
    },
    {
      url: '/images/2.jpg',
      clickHandler: () => { this.props.router.push('/photo/2'); },
    },
    {
      url: '/images/3.jpg',
      clickHandler: () => { this.props.router.push('/photo/3'); },
    },
    {
      url: '/images/4.jpg',
      clickHandler: () => { this.props.router.push('/photo/4'); },
    },
    {
      url: '/images/5.jpg',
      clickHandler: () => { this.props.router.push('/photo/5'); },
    },
    {
      url: '/images/6.jpg',
      clickHandler: () => { this.props.router.push('/photo/6'); },
    },
    {
      url: '/images/7.jpg',
      clickHandler: () => { this.props.router.push('/photo/7'); },
    },
    {
      url: '/images/8.jpg',
      clickHandler: () => { this.props.router.push('/photo/8'); },
    },
    {
      url: '/images/9.jpg',
      clickHandler: () => { this.props.router.push('/photo/9'); },
    },
    {
      url: '/images/10.jpg',
      clickHandler: () => { this.props.router.push('/photo/10'); },
    },
  ]
  renderContent = () => {
    const { photoId, nextPhoto, prevPhoto } = this.props;
    return photoId ? (
      <Photo
        photoId={photoId}
        nextPhoto={nextPhoto}
        prevPhoto={prevPhoto}
      />
    ) : (
      <div>
        <WillStreamPic />
        <ReactRpg imagesArray={this.images} columns={[1, 2, 3]} padding={10} />
      </div>
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
