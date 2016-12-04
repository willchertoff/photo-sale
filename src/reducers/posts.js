import * as types from '../constants/ActionTypes';

const items = [
  { postId: 1, title: 'Portland 2 Year', publishDate: '11-3-16', createdAt: '11/1/16 1:07', location: 'Portland, OR', imageList: [2, 3, 4, 10], coverImage: 1, body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet diam nec feugiat dictum. Cras tincidunt purus quis massa pulvinar, interdum auctor ligula dignissim. In eget egestas libero, at sodales augue. Integer elit elit, hendrerit quis lorem in, rhoncus feugiat lacus. Duis hendrerit diam ut nulla egestas, sit amet tempus ante vehicula. Sed sit amet posuere augue. Nullam suscipit purus eu interdum aliquet. </p><div class="blog-image-wrap right third"><img class="blog-image third" src="/images/2.JPG" /><span>Caption here</span></div><p>Nam in pretium nisl. Quisque pellentesque, ipsum nec sagittis finibus, quam diam pharetra risus, ut dignissim lacus dolor non dui. Fusce venenatis scelerisque ex sit amet porttitor. Duis eleifend massa id vehicula vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus odio erat, efficitur sit amet dignissim sit amet, scelerisque eu orci. Ut ornare suscipit nibh ac rutrum. Maecenas varius magna ut imperdiet fringilla. Aliquam sit amet elit neque. Proin ut interdum sem, vel fermentum ex. Quisque vel elit sit amet lacus vehicula hendrerit. Nullam nulla neque, fringilla in ligula ac, consectetur tincidunt ante. Nullam eget quam pharetra, dictum metus et, dictum ante. Donec vel metus sed est lacinia posuere sed at turpis. Aliquam consectetur volutpat est. </p><div class="blog-image-wrap center half"><img class="blog-image half" src="/images/3.JPG" /><span>Caption Two</span></div><p>Cras commodo odio iaculis finibus mattis. Curabitur laoreet, arcu non tincidunt dictum, neque dolor gravida quam, volutpat egestas enim orci a elit. Curabitur arcu nisl, accumsan a mattis vitae, venenatis non erat. Mauris elit neque, blandit ac lacinia sed, feugiat quis nibh. Suspendisse neque lorem, hendrerit in sem sed, rhoncus fringilla lorem. Cras nec velit ac erat semper tristique in a ante. Sed dapibus pulvinar facilisis. Sed non metus nec lectus porta pellentesque non et mi. Pellentesque hendrerit eget mauris gravida viverra. Nam ultrices fringilla hendrerit. Sed lobortis luctus condimentum. Donec ut sagittis urna, nec elementum nisi.</p>' },
  { postId: 2, title: 'Portlear', publishDate: '11-3-16', createdAt: '11/1/16 1:07', location: 'Portland, OR', imageList: [6, 7, 8], coverImage: 5, body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet diam nec feugiat dictum. Cras tincidunt purus quis massa pulvinar, interdum auctor ligula dignissim. In eget egestas libero, at sodales augue. Integer elit elit, hendrerit quis lorem in, rhoncus feugiat lacus. Duis hendrerit diam ut nulla egestas, sit amet tempus ante vehicula. Sed sit amet posuere augue. Nullam suscipit purus eu interdum aliquet. </p><p>Nam in pretium nisl. Quisque pellentesque, ipsum nec sagittis finibus, quam diam pharetra risus, ut dignissim lacus dolor non dui. Fusce venenatis scelerisque ex sit amet porttitor. Duis eleifend massa id vehicula vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus odio erat, efficitur sit amet dignissim sit amet, scelerisque eu orci. Ut ornare suscipit nibh ac rutrum. Maecenas varius magna ut imperdiet fringilla. Aliquam sit amet elit neque. Proin ut interdum sem, vel fermentum ex. Quisque vel elit sit amet lacus vehicula hendrerit. Nullam nulla neque, fringilla in ligula ac, consectetur tincidunt ante. Nullam eget quam pharetra, dictum metus et, dictum ante. Donec vel metus sed est lacinia posuere sed at turpis. Aliquam consectetur volutpat est. </p> <p>Cras commodo odio iaculis finibus mattis. Curabitur laoreet, arcu non tincidunt dictum, neque dolor gravida quam, volutpat egestas enim orci a elit. Curabitur arcu nisl, accumsan a mattis vitae, venenatis non erat. Mauris elit neque, blandit ac lacinia sed, feugiat quis nibh. Suspendisse neque lorem, hendrerit in sem sed, rhoncus fringilla lorem. Cras nec velit ac erat semper tristique in a ante. Sed dapibus pulvinar facilisis. Sed non metus nec lectus porta pellentesque non et mi. Pellentesque hendrerit eget mauris gravida viverra. Nam ultrices fringilla hendrerit. Sed lobortis luctus condimentum. Donec ut sagittis urna, nec elementum nisi.</p>' },
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
