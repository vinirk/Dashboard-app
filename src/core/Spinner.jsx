import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

const RadioButton = props => (
  <div>
    {props.fetching ? (
      <Spin tip="Loading...">
        {props.children}
      </Spin>
    ) : (
      <div>
        {props.children}
      </div>
    )}
  </div>
);

  RadioButton.propTypes = {
    fetching: PropTypes.bool,
  }

  RadioButton.defaultProps ={
    fetching: false,
  }

export default RadioButton;
