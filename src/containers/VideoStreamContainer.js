import React, { Component } from 'react';
import VideoStream from '../components/VideoStream';

/* To replace with reducer data */
const videos = [];
class VideoStreamContainer extends Component {
  render() {
    return (
      <VideoStream {...this.props} videos={videos} />
    );
  }
}

export default VideoStreamContainer;
