import React, { Component } from 'react';
import Stream from '../components/Stream';

const images = [
  { imageId: 1, location: 'Portland, OR', url: '/' },
  { imageId: 2, location: 'Portland, OR', url: '/' },
  { imageId: 3, location: 'Portland, OR', url: '/' },
  { imageId: 4, location: 'Portland, OR', url: '/' },
  { imageId: 5, location: 'Portland, OR', url: '/' },
];

class PhotoStreamContainer extends Component {
  render() {
    return (
      <Stream {...this.props} images={images} />
    );
  }
}

export default PhotoStreamContainer;
