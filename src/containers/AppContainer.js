import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { initEnvironment } from '../actions/EnvironmentActions';
import Nav from '../components/Nav';

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
        <Link to="/"><h1 className="header-title">Will Chertoff</h1></Link>
        <Nav />
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
