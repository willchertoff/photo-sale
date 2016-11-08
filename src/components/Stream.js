import React, { Component, PropTypes } from 'react';

const propTypes = {
  panel: PropTypes.string.isRequired,
};

class Stream extends Component {
  render() {
    const { panel } = this.props;
    return (
      <div className="panel">
        <p>{panel}</p>
      </div>
    );
  }
}

Stream.propTypes = propTypes;

export default Stream;
