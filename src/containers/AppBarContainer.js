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
          <div className="column small-6">
            <h1 className="logo"><button data-route="stream" onClick={this.handleClick}>Will Chertoff</button></h1>
          </div>
          <div className="column small-6">
            <div className="nav-links">
              <ul>
                <li><button data-route="stream" onClick={this.handleClick} >Stream</button></li>
                <li><button data-route="blog" onClick={this.handleClick}>Blog</button></li>
                <li><button data-route="shop" onClick={this.handleClick}>Cart</button></li>
                <li><button data-route="video" onClick={this.handleClick}>Videos</button></li>
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
