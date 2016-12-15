import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { ShareButtons, generateShareIcon } from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

const propTypes = {
  coverImage: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  location: PropTypes.object,
};

class BlogArticle extends Component {

  render() {
    const { coverImage, title, body, subtitle, location } = this.props;
    const { pathname } = location;
    return (
      <div className="blog-article">
        <h1 className="blog-title" >{title}</h1>
        <h2 className="blog-subtitle" >{subtitle}</h2>
        <LazyLoad height={'100%'}>
          <img src={`/images/${coverImage}.JPG`} alt={`${title}'s feature`} />
        </LazyLoad>
        <div className="blog-body" dangerouslySetInnerHTML={{ __html: body }} />
        <div className="social">
          <TwitterShareButton url={`http://willchertoff.photos${pathname}`}>
            <TwitterIcon size={32} />
          </TwitterShareButton>
          <FacebookShareButton url={`http://willchertoff.photos${pathname}`}>
            <FacebookIcon size={32} />
          </FacebookShareButton>
          <LinkedinShareButton url={`http://willchertoff.photos${pathname}`}>
            <LinkedinIcon size={32} />
          </LinkedinShareButton>
          <GooglePlusShareButton url={`http://willchertoff.photos${pathname}`}>
            <GooglePlusIcon size={32} />
          </GooglePlusShareButton>
        </div>
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
