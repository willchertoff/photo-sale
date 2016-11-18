import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import AppBarContainer from './AppBarContainer';
import { initEnvironment } from '../actions/EnvironmentActions';

const propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
};

class AppContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
  }
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
