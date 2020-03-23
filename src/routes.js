import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './pages/Products';
import Finish from './pages/Finish';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/finish" component={Finish} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
