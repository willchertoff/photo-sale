import React, { Component } from 'react';
import Blog from '../components/Blog';

class BlogContainer extends Component {
  render() {
    return (
      <Blog {...this.props} />
    );
  }
}

export default BlogContainer;
