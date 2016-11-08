import React, { PropTypes } from 'react';

const propTypes = {
  posts: PropTypes.array.isRequired,
};

const Blog = ({ posts }) => {
  const hasPosts = posts.length > 0;
  return (
    <div className="panel">
      <p>{hasPosts ? posts.length : 'No'} Posts</p>
    </div>
  );
};

Blog.propTypes = propTypes;

export default Blog;
