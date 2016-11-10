import React, { PropTypes } from 'react';
// import BlogArticle from './BlogArticle';

const propTypes = {
  posts: PropTypes.array.isRequired,
};

const Blog = ({ posts }) => {
  const hasPosts = posts.length > 0;
  const mostRecentPost = hasPosts ? (
    posts.sort((a, b) => (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))[0]
  ) : (
    false
  );
  return (
    <div className="panel">
      <p>{mostRecentPost.title}</p>
    </div>
  );
};

Blog.propTypes = propTypes;

export default Blog;
