import React, { Component, PropTypes } from 'react';
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
      stream: 'stream',
    };
    dispatch(push(paths[path]));
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper row">
          <div className="column small-6 medium-4 large-3">
            <h1><button data-route="stream" onClick={this.handleClick}>Will Chertoff</button></h1>
          </div>
          <div className="column medium-4 large-6" />
          <div className="column small-6 medium-4 large-3">
            <div className="nav-links">
              <ul>
                <button data-route="stream" onClick={this.handleClick} >Stream</button>
                <button data-route="blog" onClick={this.handleClick}>Blog</button>
                <button data-route="shop" onClick={this.handleClick}>Shop</button>
                <button data-route="video" onClick={this.handleClick}>Videos</button>
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
