import React, { PropTypes } from 'react';
// import BlogArticle from './BlogArticle';

const propTypes = {
  posts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  nextPost: PropTypes.object.isRequired,
  prevPost: PropTypes.object.isRequired,
};

const Blog = ({ posts, onClick, post, nextPost, prevPost }) => (
  <div className="panel">
    <div className="center-content blog-article">
      <img src={post.imageUrl} alt={`${post.title}'s feature`} />
      <p>{post.title}</p>
      <p>{post.publishDate}</p>
      <p className="text-2-col">{post.body}</p>
      <button onClick={onClick} data-action="nextPost" >{`Next Post -- ${nextPost.title}`}</button>
      <button onClick={onClick} data-action="prevPost" >{`Prev Post -- ${prevPost.title}`}</button>
    </div>
    <div className="sidebar">
      {posts.map(p => <p key={p.title}>{p.title}</p>)}
    </div>
  </div>
);

Blog.propTypes = propTypes;

export default Blog;
