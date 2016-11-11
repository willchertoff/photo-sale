import * as types from '../constants/ActionTypes';

const items = [
  { postId: 1, title: 'Worldwide', publishDate: '11/3/16', createdAt: '11/1/16 1:07', location: 'Portland, OR', imageUrl: '/images/boxed.JPG', body: '21 PABLO STORES WORLDWIDE THIS WEEKEND LOCATIONS HERE SCHLESISCHE STR AND OBERBAUMBRUCKE @ 2:30AM HECKMANNUFER AND SCHLESISCHE STR @ 3:00AM BERGHAIN AND AM WRIEZENER BAHNHOF @ 4:00AM LOS ANGELES FAMOUS VIEWINGS IN DALLAS TONIGHT STARTING AT N HOUSTON STREET AND ELM STREET @ 9:30PM ROSWELL ROAD AND POWERS FERRY ROAD @ 1:30AM unity love vibes AMSTERDAM PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM ...Frank album on repeat👌 ASK SOMEBODY Each and every one’s time, insight and feelings are invaluable to us. We want to make people feel great.This Tidal Apple beef is fucking up the music game. ATLANTA PORTLAND PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM' },
  { postId: 2, title: 'Canada', publishDate: '11/5/16', createdAt: '11/2/16 1:07', location: 'Portland, OR', imageUrl: '/images/fly.JPG', body: '21 PABLO STORES WORLDWIDE THIS WEEKEND LOCATIONS HERE SCHLESISCHE STR AND OBERBAUMBRUCKE @ 2:30AM HECKMANNUFER AND SCHLESISCHE STR @ 3:00AM BERGHAIN AND AM WRIEZENER BAHNHOF @ 4:00AM LOS ANGELES FAMOUS VIEWINGS IN DALLAS TONIGHT STARTING AT N HOUSTON STREET AND ELM STREET @ 9:30PM ROSWELL ROAD AND POWERS FERRY ROAD @ 1:30AM unity love vibes AMSTERDAM PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM ...Frank album on repeat👌 ASK SOMEBODY Each and every one’s time, insight and feelings are invaluable to us. We want to make people feel great.This Tidal Apple beef is fucking up the music game. ATLANTA PORTLAND PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM' },
  { postId: 3, title: 'Mexico', publishDate: '11/9/16', createdAt: '11/3/16 1:07', location: 'Portland, OR', imageUrl: '/images/mono.JPG', body: '21 PABLO STORES WORLDWIDE THIS WEEKEND LOCATIONS HERE SCHLESISCHE STR AND OBERBAUMBRUCKE @ 2:30AM HECKMANNUFER AND SCHLESISCHE STR @ 3:00AM BERGHAIN AND AM WRIEZENER BAHNHOF @ 4:00AM LOS ANGELES FAMOUS VIEWINGS IN DALLAS TONIGHT STARTING AT N HOUSTON STREET AND ELM STREET @ 9:30PM ROSWELL ROAD AND POWERS FERRY ROAD @ 1:30AM unity love vibes AMSTERDAM PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM ...Frank album on repeat👌 ASK SOMEBODY Each and every one’s time, insight and feelings are invaluable to us. We want to make people feel great.This Tidal Apple beef is fucking up the music game. ATLANTA PORTLAND PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM' },
  { postId: 4, title: 'My week alone', publishDate: '11/10/16', createdAt: '11/4/16 1:07', location: 'Portland, OR', imageUrl: '/images/taller.JPG', body: '21 PABLO STORES WORLDWIDE THIS WEEKEND LOCATIONS HERE SCHLESISCHE STR AND OBERBAUMBRUCKE @ 2:30AM HECKMANNUFER AND SCHLESISCHE STR @ 3:00AM BERGHAIN AND AM WRIEZENER BAHNHOF @ 4:00AM LOS ANGELES FAMOUS VIEWINGS IN DALLAS TONIGHT STARTING AT N HOUSTON STREET AND ELM STREET @ 9:30PM ROSWELL ROAD AND POWERS FERRY ROAD @ 1:30AM unity love vibes AMSTERDAM PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM ...Frank album on repeat👌 ASK SOMEBODY Each and every one’s time, insight and feelings are invaluable to us. We want to make people feel great.This Tidal Apple beef is fucking up the music game. ATLANTA PORTLAND PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM' },
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
