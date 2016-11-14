import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import keydown from 'react-keydown';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import PhotoStreamContainer from './PhotoStreamContainer';
import BlogContainer from './BlogContainer';
import ShopContainer from './ShopContainer';
import VideoStreamContainer from './VideoStreamContainer';

const propTypes = {
  panel: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
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
  @keydown('up', 'down', 'right', 'left')
  translate(event) {
    const { dispatch } = this.props;
    const paths = {
      ArrowUp: 'blog',
      ArrowRight: 'shop',
      ArrowLeft: 'video',
      ArrowDown: 'stream',
    };
    dispatch(push(paths[event.code]));
  }
  render() {
    const { panel } = this.props;
    return (
      <ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {this.getPannel(panel)}
      </ReactCSSTransitionReplace>
    );
  }
}

function mapStateToProps(state, { location }) {
  const { pathname } = location;
  return {
    panel: pathname.replace(/\//g, '') || '',
  };
}

AppContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AppContainer);
