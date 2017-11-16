import React, { Component } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import DashboardList from './DashboardList';
import DashboardListStore from '../stores/DashboardListStore';

class DashboardListContainer extends Component {

  componentDidMount() {
    DashboardListStore.init();
  }

  render() {
    return (
      <DashboardList
        allTours={toJS(DashboardListStore.allTours)}
        allBookingLeadTime={toJS(DashboardListStore.allBookingLeadTime)}
        allTotalBookings={toJS(DashboardListStore.allTotalBookings)}
        allTotalEvents={toJS(DashboardListStore.allTotalEvents)}
        allAverageCapacity={toJS(DashboardListStore.allAverageCapacity)}
        currentDepartureTime={toJS(DashboardListStore.currentDepartureTime)}
        values={DashboardListStore.getValues()}
        fetching={DashboardListStore.fetching}
      />
    );
  }
}

export default observer(DashboardListContainer);
