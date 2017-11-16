import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Select from '../../../core/Select';

const DashboardListFilter = props => (
  <div
    style={{
      width: '100%',
      height: 80,
      paddingLeft: 20,
      background: '#5e738a',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
    }}
  >
    <div>
      <div
        style={{
          color: '#fff',
          fontWeight: 400,
        }}
      >
        Select an option
      </div>
      <Select
        placeholder="Select any value"
        options={props.tours}
        value={get(props.values, 'tour')}
        onChange={value => {
          props.onChange('tour', value);
          props.onSearch();
        }}
      />
    </div>
  </div>
);

DashboardListFilter.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
}

DashboardListFilter.defaultProps = {
  tours: [],
}

export default DashboardListFilter;
