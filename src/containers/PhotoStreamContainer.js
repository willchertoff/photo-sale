import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stream from '../components/Stream';

class PhotoStreamContainer extends Component {
  handleClick() {
    /* Do Nothing */
    return this;
  }
  render() {
    return (
      <Stream {...this.props} handleClick={this.handleClick} />
    );
  }
}

function mapStateToProps(state) {
  const { images } = state;
  const { items } = images;
  return {
    items,
  };
}

export default connect(mapStateToProps)(PhotoStreamContainer);
