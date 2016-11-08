import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const propTypes = {
  panel: PropTypes.string.isRequired,
};

class VideoStreamContainer extends Component {
  render() {
    const { panel } = this.props;
    return (
      <p>{panel}</p>
    );
  }
}

function mapStateToProps(state, { params }) {
  return {
    panel: params.panel || 'video-stream',
  };
}

VideoStreamContainer.propTypes = propTypes;

export default withRouter(connect(mapStateToProps)(VideoStreamContainer));
