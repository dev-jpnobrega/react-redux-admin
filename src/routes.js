import React from 'react';
import { Route, IndexRoute } from 'react-router';
//import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import TablePage from './containers/TablePage';
import Dashboard from './components/dashboard';

import appOrAuth from './main/appOrAuth'; 
import ClientRegister from './components/client/register';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={appOrAuth}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="table" component={TablePage}/>
      <Route path="client">
          <Route path="register" component={ClientRegister} />
      </Route>
    </Route>
  </Route>
);
