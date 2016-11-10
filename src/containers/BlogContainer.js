import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blog from '../components/Blog';

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
  const { items, mostRecentPost } = posts;
  return {
    posts: items,
    postId,
    mostRecentPost,
  };
}

export default connect(mapStateToProps)(BlogContainer);
