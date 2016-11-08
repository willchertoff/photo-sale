import React, { Component, PropTypes } from 'react';

const propTypes = {
  panel: PropTypes.string.isRequired,
};

class VideoStream extends Component {
  render() {
    const { panel } = this.props;
    return (
      <div className="panel">
        <p>{panel}</p>
      </div>
    );
  }
}

VideoStream.propTypes = propTypes;

export default VideoStream;
