import React, { Component } from 'react';
import Stream from '../components/Stream';

class PhotoStreamContainer extends Component {
  render() {
    return (
      <Stream {...this.props} />
    );
  }
}

export default PhotoStreamContainer;
