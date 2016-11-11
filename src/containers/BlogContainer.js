import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { last, first } from 'lodash';
import Blog from '../components/Blog';
import cachePostId from '../actions/PostActions';

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
      nextPost: () => {
        dispatch(cachePostId(this.props.nextPost.postId));
        dispatch(push(`/blog?postId=${this.props.nextPost.postId}`));
      },
      prevPost: () => {
        dispatch(cachePostId(this.props.prevPost.postId));
        dispatch(push(`/blog?postId=${this.props.prevPost.postId}`));
      },
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
