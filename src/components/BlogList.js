import React, { PropTypes } from 'react';

const propTypes = {
  posts: PropTypes.array.isRequired,
};

const BlogList = ({ posts }) => (
  <div className="blog-item">
    {posts.map(post => (
      <div className="blog-item-inner" key={post.title}>
        <img className="main-pic" src={`/images/${post.coverImage}.JPG`} alt={post.title} />
        <div className="blog-item-title">
          <span>{post.title}</span>
          <span>{post.publishDate}</span>
        </div>
        <div className="image-list">
          {post.imageList.map(image =>
            <a key={image} ><img src={`/images/${image}.JPG`} alt={image} /></a>
          )}
        </div>
      </div>
    ))}
  </div>
);

BlogList.propTypes = propTypes;

export default BlogList;
