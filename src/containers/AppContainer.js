import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import AppBarContainer from './AppBarContainer';
import { initEnvironment } from '../actions/EnvironmentActions';

const propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

class AppContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
  }
  render() {
    const { location } = this.props;
    const { pathname } = location;
    return (
      <div>
        <AppBarContainer />
        <ReactCSSTransitionReplace
          transitionName="fade-wait"
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={400}
        >
          {React.cloneElement(this.props.children, {
            key: pathname,
          })}
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}

function mapStateToProps(state, { location }) {
  return { ...state, location };
}

AppContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AppContainer);
