import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  coverImage: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

class BlogArticle extends Component {

  render() {
    const { coverImage, title, publishDate, body } = this.props;
    return (
      <div className="blog-article">
        <img src={`/images/${coverImage}.JPG`} alt={`${title}'s feature`} />
        <h1 className="blog-title" >{title}</h1>
        <h5>{publishDate}</h5>
        <div className="blog-body" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    );
  }
}

function mapStateToProps(state, { params }) {
  const { postId } = params;
  const { posts } = state;
  const { items } = posts;
  const post = postId ? items[postId - 1] : null;
  const { coverImage, title, publishDate, body } = post;

  return {
    coverImage,
    title,
    publishDate,
    body,
  };
}

BlogArticle.propTypes = propTypes;


export default connect(mapStateToProps)(BlogArticle);
