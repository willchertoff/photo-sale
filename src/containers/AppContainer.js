import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import AppBarContainer from './AppBarContainer';

const propTypes = {
  children: PropTypes.element.isRequired,
};

class AppContainer extends Component {
  render() {
    return (
      <div>
        <AppBarContainer />
        <ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.props.children}
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

AppContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AppContainer);
