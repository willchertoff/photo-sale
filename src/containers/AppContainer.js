import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PhotoStreamContainer from './PhotoStreamContainer';
import BlogContainer from './BlogContainer';

const propTypes = {
  panel: PropTypes.string.isRequired,
};

class AppContainer extends Component {

  getPannel(panel = 'stream') {
    const panels = {
      stream: () => (<PhotoStreamContainer {...this.props} />),
      blog: () => (<BlogContainer {...this.props} />),
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
    panel: params.panel || 'stream',
    message,
  };
}

AppContainer.propTypes = propTypes;

export default withRouter(connect(mapStateToProps)(AppContainer));
