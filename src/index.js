import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import DashboardListContainer from './views/dashboard/components/DashboardListContainer';

render(<DashboardListContainer />, document.getElementById('root'));
registerServiceWorker();
