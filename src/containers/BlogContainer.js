import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blog from '../components/Blog';

/* To replace with reducer data */
const posts = [
  { postId: 1, title: 'Worldwide', publishDate: '11/3/16', createdAt: '11/1/16 1:07', location: 'Portland, OR', imageUrl: '/', body: '21 PABLO STORES WORLDWIDE THIS WEEKEND LOCATIONS HERE SCHLESISCHE STR AND OBERBAUMBRUCKE @ 2:30AM HECKMANNUFER AND SCHLESISCHE STR @ 3:00AM BERGHAIN AND AM WRIEZENER BAHNHOF @ 4:00AM LOS ANGELES FAMOUS VIEWINGS IN DALLAS TONIGHT STARTING AT N HOUSTON STREET AND ELM STREET @ 9:30PM ROSWELL ROAD AND POWERS FERRY ROAD @ 1:30AM unity love vibes AMSTERDAM PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM ...Frank album on repeat👌 ASK SOMEBODY Each and every one’s time, insight and feelings are invaluable to us. We want to make people feel great.This Tidal Apple beef is fucking up the music game. ATLANTA PORTLAND PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM' },
  { postId: 2, title: 'Canada', publishDate: '11/3/16', createdAt: '11/2/16 1:07', location: 'Portland, OR', imageUrl: '/', body: '21 PABLO STORES WORLDWIDE THIS WEEKEND LOCATIONS HERE SCHLESISCHE STR AND OBERBAUMBRUCKE @ 2:30AM HECKMANNUFER AND SCHLESISCHE STR @ 3:00AM BERGHAIN AND AM WRIEZENER BAHNHOF @ 4:00AM LOS ANGELES FAMOUS VIEWINGS IN DALLAS TONIGHT STARTING AT N HOUSTON STREET AND ELM STREET @ 9:30PM ROSWELL ROAD AND POWERS FERRY ROAD @ 1:30AM unity love vibes AMSTERDAM PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM ...Frank album on repeat👌 ASK SOMEBODY Each and every one’s time, insight and feelings are invaluable to us. We want to make people feel great.This Tidal Apple beef is fucking up the music game. ATLANTA PORTLAND PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM' },
  { postId: 3, title: 'Mexico', publishDate: '11/3/16', createdAt: '11/3/16 1:07', location: 'Portland, OR', imageUrl: '/', body: '21 PABLO STORES WORLDWIDE THIS WEEKEND LOCATIONS HERE SCHLESISCHE STR AND OBERBAUMBRUCKE @ 2:30AM HECKMANNUFER AND SCHLESISCHE STR @ 3:00AM BERGHAIN AND AM WRIEZENER BAHNHOF @ 4:00AM LOS ANGELES FAMOUS VIEWINGS IN DALLAS TONIGHT STARTING AT N HOUSTON STREET AND ELM STREET @ 9:30PM ROSWELL ROAD AND POWERS FERRY ROAD @ 1:30AM unity love vibes AMSTERDAM PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM ...Frank album on repeat👌 ASK SOMEBODY Each and every one’s time, insight and feelings are invaluable to us. We want to make people feel great.This Tidal Apple beef is fucking up the music game. ATLANTA PORTLAND PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM' },
  { postId: 4, title: 'My week alone', publishDate: '11/3/16', createdAt: '11/4/16 1:07', location: 'Portland, OR', imageUrl: '/images/boxed.JPG', body: '21 PABLO STORES WORLDWIDE THIS WEEKEND LOCATIONS HERE SCHLESISCHE STR AND OBERBAUMBRUCKE @ 2:30AM HECKMANNUFER AND SCHLESISCHE STR @ 3:00AM BERGHAIN AND AM WRIEZENER BAHNHOF @ 4:00AM LOS ANGELES FAMOUS VIEWINGS IN DALLAS TONIGHT STARTING AT N HOUSTON STREET AND ELM STREET @ 9:30PM ROSWELL ROAD AND POWERS FERRY ROAD @ 1:30AM unity love vibes AMSTERDAM PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM ...Frank album on repeat👌 ASK SOMEBODY Each and every one’s time, insight and feelings are invaluable to us. We want to make people feel great.This Tidal Apple beef is fucking up the music game. ATLANTA PORTLAND PIEDMONT ROAD NE AND LINDBERGH WAY NE @ 11:30PM MORELAND AVENUE NE AND EUCLID AVENUE NE @ 12:30AM' },
];

class BlogContainer extends Component {
  render() {
    return (
      <Blog {...this.props} posts={posts} />
    );
  }
}

function mapStateToProps(state, { location }) {
  const { query } = location;
  const { postId } = query;
  return {
    postId: postId || '',
    query: query || '',
  };
}

export default connect(mapStateToProps)(BlogContainer);
