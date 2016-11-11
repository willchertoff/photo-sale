import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { last, first } from 'lodash';
import Blog from '../components/Blog';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  nextPost: PropTypes.shape({
    postId: PropTypes.number.isRequired,
  }),
  prevPost: PropTypes.shape({
    postId: PropTypes.number.isRequired,
  }),
};

class BlogContainer extends Component {
  handleArticleClick = (event) => {
    const { dispatch } = this.props;
    const action = event.target.getAttribute('data-action');
    const actions = {
      nextPost: () => (dispatch(push(`/blog?postId=${this.props.nextPost.postId}`))),
      prevPost: () => (dispatch(push(`/blog?postId=${this.props.prevPost.postId}`))),
    };
    actions[action]();
  }
  render() {
    return (
      <Blog {...this.props} onClick={this.handleArticleClick} />
    );
  }
}


function mapStateToProps(state, { location }) {
  const { query } = location;
  const { postId } = query;
  const { posts } = state;
  const { items, mostRecentPost } = posts;
  const postIds = items.map(post => post.postId);
  const nextPost = post => (post.postId === last(postIds) ? first(items) : items[post.postId]);
  const prevPost = post => (post.postId === first(postIds) ? last(items) : items[post.postId - 2]);
  const post = postId ? (
    items[postId - 1]
  ) : (
    mostRecentPost
  );
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
