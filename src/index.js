import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

render(<Routes />, document.getElementById('root'));
registerServiceWorker();
