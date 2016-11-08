import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import keydown from 'react-keydown';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PhotoStreamContainer from './PhotoStreamContainer';
import BlogContainer from './BlogContainer';
import ShopContainer from './ShopContainer';
import VideoStreamContainer from './VideoStreamContainer';

const propTypes = {
  panel: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
};

class AppContainer extends Component {

  getPannel(panel) {
    const panels = {
      stream: () => (<PhotoStreamContainer key="PhotoStreamContainer" {...this.props} />),
      blog: () => (<BlogContainer key="BlogContainer" {...this.props} />),
      shop: () => (<ShopContainer key="ShopContainer" {...this.props} />),
      video: () => (<VideoStreamContainer key="VideoStreamContainer" {...this.props} />),
      default: () => (<PhotoStreamContainer key="PhotoStreamContainer" {...this.props} />),
    };
    return (panels[panel] || panels.default)();
  }
  /* eslint-disable class-methods-use-this */
  @keydown('up', 'down', 'right', 'left')
  translate(event) {
    const { push } = this.props.router;
    const paths = {
      ArrowUp: 'blog',
      ArrowRight: 'shop',
      ArrowLeft: 'video',
      ArrowDown: 'stream',
    };
    return push(paths[event.code]);
  }
  /* eslint-enable class-methods-use-this */
  render() {
    const { panel } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={100}
      >
        {this.getPannel(panel)}
      </ReactCSSTransitionGroup>
    );
  }
}

function mapStateToProps(state, { params }) {
  const { message } = state;
  const { panel } = params;
  return {
    panel: panel || 'stream',
    message,
  };
}

AppContainer.propTypes = propTypes;

export default withRouter(connect(mapStateToProps)(AppContainer));
