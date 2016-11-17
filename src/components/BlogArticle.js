import React, { PropTypes } from 'react';

const propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

const BlogArticle = ({ coverImage, title, publishDate, body }) => ( // eslint-disable-line max-len
  <div className="blog-article">
    <img src={`/images/${coverImage}.JPG`} alt={`${title}'s feature`} />
    <h1 className="blog-title" >{title}</h1>
    <h5>{publishDate}</h5>
    <div className="blog-body" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

BlogArticle.propTypes = propTypes;


export default BlogArticle;
