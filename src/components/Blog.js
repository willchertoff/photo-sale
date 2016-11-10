import React, { PropTypes } from 'react';
// import BlogArticle from './BlogArticle';

const propTypes = {
  posts: PropTypes.array.isRequired,
  mostRecentPost: PropTypes.object.isRequired,
  postId: PropTypes.string,
};

const Blog = ({ posts, mostRecentPost, postId }) => {
  const post = postId ? (
    posts[postId]
  ) : (
    mostRecentPost
  );
  return (
    <div className="panel">
      <p>{post.title}</p>
    </div>
  );
};

Blog.propTypes = propTypes;

export default Blog;
