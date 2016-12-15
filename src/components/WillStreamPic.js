import React from 'react';

const picStyles = {
  backgroundImage: `url('/images/me.png')`, // eslint-disable-line quotes
};
const WillStreamPic = () =>
  <div className="main-stream-header">
    <a href="https://www.instagram.com/behind_your_eye/" rel="noopener noreferrer" target="_blank">
      <div className="main-stream-pic" style={picStyles} />
      <h6>will chertoff</h6>
    </a>
  </div>;

export default WillStreamPic;
