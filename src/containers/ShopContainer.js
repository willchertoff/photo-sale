import React, { Component } from 'react';
import Shop from '../components/Shop';

class ShopContainer extends Component {
  render() {
    return (
      <Shop {...this.props} />
    );
  }
}

export default ShopContainer;
