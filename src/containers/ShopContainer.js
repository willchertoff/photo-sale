import React, { Component } from 'react';
import Shop from '../components/Shop';

/* To replace with reducer data */
const { prints, total, onCheckoutClick } = {
  prints: [{ imageId: 1 }, { imageId: 2 }],
  total: 10,
  onCheckoutClick: () => { /* do nothing */ },
};

class ShopContainer extends Component {
  render() {
    return (
      <Shop {...this.props} prints={prints} total={total} onCheckoutClick={onCheckoutClick} />
    );
  }
}

export default ShopContainer;
