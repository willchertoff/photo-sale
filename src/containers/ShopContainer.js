import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const propTypes = {
  panel: PropTypes.string.isRequired,
};

class ShopContainer extends Component {
  render() {
    const { panel } = this.props;
    return (
      <p>{panel}</p>
    );
  }
}

function mapStateToProps(state, { params }) {
  return {
    panel: params.panel || 'shop',
  };
}

ShopContainer.propTypes = propTypes;

export default withRouter(connect(mapStateToProps)(ShopContainer));
