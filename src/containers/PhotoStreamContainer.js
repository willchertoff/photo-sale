import React, { Component } from 'react';
import Stream from '../components/Stream';

/* To replace with reducer data */
const images = [
  { imageId: 1, location: 'Portland, OR', url: '/images/boxed.JPG', title: 'boxed' },
  { imageId: 2, location: 'Portland, OR', url: '/images/fly.JPG', title: 'fly' },
  { imageId: 3, location: 'Portland, OR', url: '/images/mono.JPG', title: 'mono' },
  { imageId: 4, location: 'Portland, OR', url: '/images/no-smoking.JPG', title: 'no smoking' },
  { imageId: 5, location: 'Portland, OR', url: '/images/tall.JPG', title: 'tall' },
  { imageId: 6, location: 'Portland, OR', url: '/images/taller.JPG', title: 'taller' },
];

class PhotoStreamContainer extends Component {
  handleClick() {
    /* Do Nothing */
    return this;
  }
  render() {
    return (
      <Stream {...this.props} images={images} handleClick={this.handleClick} />
    );
  }
}

export default PhotoStreamContainer;
