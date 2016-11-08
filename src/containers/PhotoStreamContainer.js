import React, { Component } from 'react';
import Stream from '../components/Stream';

/* To replace with reducer data */
const images = [
  { imageId: 1, location: 'Portland, OR', url: '/images/boxed.JPG' },
  { imageId: 2, location: 'Portland, OR', url: '/images/fly.JPG' },
  { imageId: 3, location: 'Portland, OR', url: '/images/mono.JPG' },
  { imageId: 4, location: 'Portland, OR', url: '/images/no-smoking.JPG' },
  { imageId: 5, location: 'Portland, OR', url: '/images/tall.JPG' },
  { imageId: 6, location: 'Portland, OR', url: '/images/taller.JPG' },
];

class PhotoStreamContainer extends Component {
  render() {
    return (
      <Stream {...this.props} images={images} />
    );
  }
}

export default PhotoStreamContainer;
