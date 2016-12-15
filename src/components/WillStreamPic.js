import React from 'react';

const picStyles = {
  backgroundImage: `url('/images/me.png')`, // eslint-disable-line quotes
};
const WillStreamPic = () =>
  <div className="main-stream-header">
    <div className="main-stream-pic" style={picStyles} />
    <h6>Will Chertoff</h6>
  </div>;

export default WillStreamPic;
