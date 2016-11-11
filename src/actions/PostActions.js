import * as types from '../constants/ActionTypes';

function updateLastViewed(postId) {
  return {
    type: types.UPDATE_LAST_VIEWD_POST,
    postId,
  };
}

export default function cachePostId(postId) {
  return dispatch =>
    dispatch(updateLastViewed(postId));
}
