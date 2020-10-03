import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sorting from '../pages/Sorting';
import House from '../pages/House';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Sorting} />
    <Route path="/house/:houseName" component={House} />
  </Switch>
);

export default Routes;
