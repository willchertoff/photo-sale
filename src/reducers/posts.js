import * as types from '../constants/ActionTypes';

const items = [
  { postId: 1, title: 'Spontaneous', subtitle: 'Try Less', publishDate: '11-3-16', createdAt: '11/1/16 1:07', location: 'Portland, OR', imageList: [2, 3, 4, 10], coverImage: 1, body: '<p>Time after time I find myself "going out" to shoot photos. I am motivated. I want to become more prolific at expressing my vision.</p><p>Recently I have realized that I can rarely consciously try to better my craft without it becoming a cheap fake of another. There is something so valuable in chance. Valuable enough to hold closely. This journal is a dedication to chance. A dedication to try less.</p><div class="blog-image-wrap center"><img class="blog-image half" src="/images/2.JPG" /></div><div class="blog-image-wrap center"><img class="blog-image half" src="/images/3.JPG" /></div>',
  },
];

const postsByRecentPublishDate = i => i.sort((a, b) => (
  new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
));

const mostRecentPost = postsByRecentPublishDate(items)[0];
const lastViewedPostId = mostRecentPost.postId;


const initialState = {
  lastViewedPostId,
  items,
  mostRecentPost,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_LAST_VIEWD_POST:
      return { ...state,
        lastViewedPostId: action.postId,
      };
    default:
      return { ...state };
  }
}
