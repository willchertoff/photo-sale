import React, { PropTypes } from 'react';

const propTypes = {
  posts: PropTypes.array.isRequired,
};

const BlogList = ({ posts }) => (
  <div className="blog-item">
    {posts.map(post => (
      <div key={post.title}>
        <div className="main-pic">
          <img src={`/images/${post.coverImage}.JPG`} alt={post.title} />
        </div>
        <div className="blog-title">
          <p>{post.title}</p>
          <p>{post.publishDate}</p>
        </div>
        <div className="image-list">
          <ul>
            {post.imageList.map(image =>
              <li key={image} ><img src={`/images/${image}.JPG`} alt={image} /></li>
            )}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

BlogList.propTypes = propTypes;

export default BlogList;
