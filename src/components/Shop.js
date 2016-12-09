import React, { PropTypes } from 'react';

const propTypes = {
  prints: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  onCheckoutClick: PropTypes.func.isRequired,
};
const Shop = ({ prints, total, onCheckoutClick }) => {
  const hasPrints = prints.length > 0;
  const message = hasPrints ? (
    <p>{`${prints.length} x Prints = ${total} $`}</p>
  ) : (
  <p>You don't have any prints selected</p>
  );
  const title = hasPrints ? (
    <div>
      <h3>Cart</h3>
      <button onClick={onCheckoutClick}>Checkout</button>
    </div>
  ) : (
    ''
  );
  return (
    <div className="panel">
      {title}
      {message}
    </div>
  );
};

Shop.propTypes = propTypes;

export default Shop;
