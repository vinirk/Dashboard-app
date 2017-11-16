import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import DashboardListStore from '../stores/DashboardListStore';
import DashboardListFilter from './DashboardListFilter';

const DashboardListFilterContainer = () => (
  <DashboardListFilter
    values={DashboardListStore.getValues()}
    onChange={DashboardListStore.setValue}
    onSearch={DashboardListStore.loadByTour}
    tours={toJS(DashboardListStore.tours)}
    fetching={DashboardListStore.fetching}
  />
);

export default observer(DashboardListFilterContainer);
