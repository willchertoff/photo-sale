import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blog from '../components/Blog';

/* To replace with reducer data */

class BlogContainer extends Component {
  render() {
    return (
      <Blog {...this.props} />
    );
  }
}

function mapStateToProps(state, { location }) {
  const { query } = location;
  const { postId } = query;
  const { posts } = state;
  const { items } = posts;
  return {
    query: query || '',
    posts: items,
    postId,
  };
}

export default connect(mapStateToProps)(BlogContainer);
