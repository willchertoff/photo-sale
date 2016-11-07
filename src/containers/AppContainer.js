import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PhotoStreamContainer from './PhotoStreamContainer';

const propTypes = {
  panel: PropTypes.string.isRequired,
};

class AppContainer extends Component {

  getPannel(panel = 'photo-stream') {
    const panels = {
      'photo-stream': () => (<PhotoStreamContainer {...this.props} />),
    };
    return panels[panel]();
  }
  render() {
    const { panel } = this.props;
    return (
      this.getPannel(panel)
    );
  }
}

function mapStateToProps(state, { params }) {
  const { message } = state;
  return {
    panel: params.panel || 'photo-stream',
    message,
  };
}

AppContainer.propTypes = propTypes;

export default withRouter(connect(mapStateToProps)(AppContainer));
