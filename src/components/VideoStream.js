import React, { PropTypes } from 'react';

const propTypes = {
  videos: PropTypes.array.isRequired,
};

const VideoStream = ({ videos }) => {
  const hasVideos = videos.length > 0;
  return (
    <div className="panel">
      <p>{hasVideos ? videos.length : 'No'} Videos</p>
    </div>
  );
};

VideoStream.propTypes = propTypes;

export default VideoStream;
