import React, { Component, PropTypes } from 'react';
import BlogArticle from './BlogArticle';

const propTypes = {
  posts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  nextPost: PropTypes.object.isRequired,
  prevPost: PropTypes.object.isRequired,
};

class Blog extends Component {
  render() {
    const { post, nextPost, prevPost, posts, onClick } = this.props;
    const { imageUrl, title, publishDate, body } = post;
    return (
      <div className="panel">
        <div className="center-content blog-article">
          <BlogArticle
            post={post}
            onClick={onClick}
            imageUrl={imageUrl}
            title={title}
            publishDate={publishDate}
            body={body}
            nextPostTitle={nextPost.title}
            prevPostTitle={prevPost.title}
          />
          <div className="sidebar">
            {posts.map(p => <p key={p.title}>{p.title}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

Blog.propTypes = propTypes;

export default Blog;
