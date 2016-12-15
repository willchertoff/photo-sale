import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';

const propTypes = {
  post: PropTypes.object,
  posts: PropTypes.array.isRequired,
  children: PropTypes.any,
};

class BlogContainer extends Component {
  renderContent = () => {
    const { post, posts } = this.props;
    return post ? (
      this.props.children
    ) :
    (
      <BlogList
        posts={posts}
        onClick={this.toPost}
      />
    );
  }
  render() {
    return (
      <div className="panel">
        <div className="blog-container">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, { params }) {
  const { postId } = params;
  const { posts } = state;
  const { items } = posts;
  const post = postId ? items[postId - 1] : null;
  const postIds = items.map(p => p.postId);
  return {
    posts: items,
    postIds,
    post,
    postId,
  };
}

BlogContainer.propTypes = propTypes;

export default connect(mapStateToProps)(BlogContainer);
