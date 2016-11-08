import React, { Component, PropTypes } from 'react';

const propTypes = {
  panel: PropTypes.string.isRequired,
};

class Blog extends Component {
  render() {
    const { panel } = this.props;
    return (
      <div className="panel">
        <p>{panel}</p>
      </div>
    );
  }
}

Blog.propTypes = propTypes;

export default Blog;
