import React, { PropTypes } from 'react';

const propTypes = {
  otherPosts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const BlogSideBar = ({ otherPosts, onClick }) => (
  <div className="blog-sidebar">
    <h4>Latest Posts</h4>
    {otherPosts.map(post =>
      <div className="post-aside">
        <button data-action="toPost" data-post={post.postId} onClick={onClick} >{post.title}</button>
        <p>{post.publishDate}</p>
      </div>
    )}
  </div>
);

BlogSideBar.propTypes = propTypes;


export default BlogSideBar;
