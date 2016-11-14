import React, { PropTypes } from 'react';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  nextPostTitle: PropTypes.string.isRequired,
  prevPostTitle: PropTypes.string.isRequired,
};

const BlogArticle = ({ onClick, imageUrl, title, publishDate, body, nextPostTitle, prevPostTitle }) => ( // eslint-disable-line max-len
  <div className="blog-article">
    <img src={imageUrl} alt={`${title}'s feature`} />
    <h1 className="blog-title" >{title}</h1>
    <h5>{publishDate}</h5>
    <div className="blog-body" dangerouslySetInnerHTML={{ __html: body }} />
    <button onClick={onClick} data-action="nextPost" >{`Next Post -- ${nextPostTitle}`}</button>
    <button onClick={onClick} data-action="prevPost" >{`Prev Post -- ${prevPostTitle}`}</button>
  </div>
);

BlogArticle.propTypes = propTypes;


export default BlogArticle;
