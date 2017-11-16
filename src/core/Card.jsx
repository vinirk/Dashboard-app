import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card as AntCard } from 'antd';

class Card extends Component {

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    extra: PropTypes.node,
  }

  static defaultProps ={
    title: null,
    extra: null,
  }

  render() {
    return (
      <AntCard
        style={{ width: '100%' }}
        title={this.props.title}
        extra={this.props.extra}
      >
        {this.props.children}
      </AntCard>
    );
  }
}

export default Card;
