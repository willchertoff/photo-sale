import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { last, first } from 'lodash';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import BlogArticle from '../components/BlogArticle';
import BlogSideBar from '../components/BlogSideBar';
import cachePostId from '../actions/PostActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  nextPost: PropTypes.shape({
    postId: PropTypes.number.isRequired,
  }),
  prevPost: PropTypes.shape({
    postId: PropTypes.number.isRequired,
  }),
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};

class BlogContainer extends Component {
  handleArticleClick = (event) => {
    const { dispatch } = this.props;
    const action = event.target.getAttribute('data-action');
    const id = event.target.getAttribute('data-post');
    const actions = {
      nextPost: () => {
        dispatch(cachePostId(this.props.nextPost.postId));
        dispatch(push(`/blog?postId=${this.props.nextPost.postId}`));
      },
      prevPost: () => {
        dispatch(cachePostId(this.props.prevPost.postId));
        dispatch(push(`/blog?postId=${this.props.prevPost.postId}`));
      },
      toPost: () => {
        dispatch(cachePostId(id));
        dispatch(push(`/blog?postId=${id}`));
      },
    };
    actions[action]();
  }
  render() {
    const { post, nextPost, prevPost, posts } = this.props;
    const { imageUrl, title, publishDate, body } = post;
    const otherPosts = posts.filter(p => p.postId !== post.postId);
    return (
      <div className="panel">
        <div className="blog-container flex">
          <ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
            <BlogArticle
              post={post}
              onClick={this.handleArticleClick}
              imageUrl={imageUrl}
              title={title}
              publishDate={publishDate}
              body={body}
              nextPostTitle={nextPost.title}
              prevPostTitle={prevPost.title}
            />
          </ReactCSSTransitionReplace>
          <BlogSideBar
            otherPosts={otherPosts}
            onClick={this.handleArticleClick}
          />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, { location }) {
  const { query } = location;
  const { postId } = query;
  const { posts } = state;
  const { items, mostRecentPost, lastViewedPostId } = posts;
  const postIds = items.map(post => post.postId);
  const post = postId ? (
    items[postId - 1]
  ) : (
    items[lastViewedPostId - 1]
  );
  const prevPost = p => (p.postId === first(postIds) ? last(items) : items[p.postId - 2]);
  const nextPost = p => (p.postId === last(postIds) ? first(items) : items[p.postId]);
  return {
    posts: items,
    postIds,
    nextPost: nextPost(post),
    prevPost: prevPost(post),
    post,
    postId,
    mostRecentPost,
  };
}

BlogContainer.propTypes = propTypes;

export default connect(mapStateToProps)(BlogContainer);
