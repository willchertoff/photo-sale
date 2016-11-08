import React, { Component } from 'react';
import VideoStream from '../components/VideoStream';

class VideoStreamContainer extends Component {
  render() {
    return (
      <VideoStream {...this.props} />
    );
  }
}

export default VideoStreamContainer;
