/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./favicon.ico');
import './styles.scss';
import '../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

import store from './main/stores/store';

injectTapEventPlugin();

render(
    <Provider store={store} >
        <Router routes={routes} history={browserHistory} />
    </Provider>, 
    document.getElementById('app')
);
