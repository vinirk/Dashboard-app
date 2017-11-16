import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const RadioButton = props => (

  <Radio.Group size="medium">
    {props.data.map(item => (
      <Radio.Button key={`${item.value}-${item.label}`} value={item.value}>{item.label}</Radio.Button>
    ))}
  </Radio.Group>
);

  RadioButton.propTypes = {
    data: PropTypes.node,
  }

  RadioButton.defaultProps ={
    data: null,
  }

export default RadioButton;
