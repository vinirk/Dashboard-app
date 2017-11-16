import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import DashboardListContainer from './views/dashboard/components/DashboardListContainer';
import NotFoundScene from './views/notfound/components/NotFoundScene';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/dasboard" component={DashboardListContainer}/>
      <Route component={NotFoundScene} />
    </Switch>
  </Router>
);

export default Routes;
