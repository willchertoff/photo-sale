import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

class AppBarContainer extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { target } = e;
    const path = target.getAttribute('data-route');
    const paths = {
      blog: 'blog',
      shop: 'shop',
      video: 'video',
      stream: '/',
    };
    dispatch(push(paths[path]));
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper row small-collapse">
          <div className="column small-6">
            <h1 className="logo"><button data-route="stream" onClick={this.handleClick}>Will Chertoff</button></h1>
          </div>
          <div className="column small-6">
            <div className="nav-links">
              <ul>
                <li><Link to="/">Stream</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/video">Video</Link></li>
                <li><Link to="/shop">Shop</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

AppBarContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AppBarContainer);
