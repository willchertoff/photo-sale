import React, { Component, PropTypes } from 'react';

const propTypes = {
  panel: PropTypes.string.isRequired,
};

class Shop extends Component {
  render() {
    const { panel } = this.props;
    return (
      <div className="panel">
        <p>{panel}</p>
      </div>
    );
  }
}

Shop.propTypes = propTypes;

export default Shop;
