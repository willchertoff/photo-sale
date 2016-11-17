import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BlogArticle from '../components/BlogArticle';
import BlogList from '../components/BlogList';

const propTypes = {
  post: PropTypes.object,
  posts: PropTypes.array.isRequired,
};

class BlogContainer extends Component {
  renderContent = () => {
    const { post, posts } = this.props;
    return post ? (
      <BlogArticle
        coverImage={post.coverImage}
        title={post.title}
        publishDate={post.publishDate}
        body={post.body}
      />
    ) :
    (
    <BlogList
      posts={posts}
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


function mapStateToProps(state, { location }) {
  const { query } = location;
  const { postId } = query;
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
