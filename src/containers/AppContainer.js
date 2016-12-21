import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
        {React.cloneElement(this.props.children, {
          key: pathname,
        })}
      </div>
    );
  }
}

function mapStateToProps(state, { location }) {
  return { ...state, location };
}

AppContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AppContainer);
