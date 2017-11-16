import React from 'react';
import PropTypes from 'prop-types';
import { Select as AntSelect } from 'antd';

const Select = props => (
  <AntSelect
    allowClear
    showSearch
    notFoundContent="Not Found."
    style={{
      width: 300,
    }}
    placeholder={props.placeholder}
    disabled={props.disabled}
    value={props.value}
    onChange={value => props.onChange && props.onChange(value)}
  >
    {props.options.map((option, index) => (
      <AntSelect.Option
        key={`option-${option.value}-${new Date()}`}
        value={option.value}
      >
        {index === 0 ? <div style={{fontWeight: 'bold'}}>{option.label}</div> : <div>{option.label}</div>}
      </AntSelect.Option>
    ))}
  </AntSelect>
);

Select.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
};

Select.defaultProps = {
  disabled: false,
  value: null,
  placeholder: 'Select any option',
  onChange: null,
};

export default Select;
