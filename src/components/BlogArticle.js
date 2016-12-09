import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';

const propTypes = {
  coverImage: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

class BlogArticle extends Component {

  render() {
    const { coverImage, title, body, subtitle } = this.props;
    return (
      <div className="blog-article">
        <h1 className="blog-title" >{title}</h1>
        <h2 className="blog-subtitle" >{subtitle}</h2>
        <LazyLoad height={'100%'}>
          <img src={`/images/${coverImage}.JPG`} alt={`${title}'s feature`} />
        </LazyLoad>
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
  const { coverImage, title, publishDate, body, subtitle } = post;

  return {
    coverImage,
    title,
    publishDate,
    body,
    subtitle,
  };
}

BlogArticle.propTypes = propTypes;


export default connect(mapStateToProps)(BlogArticle);
