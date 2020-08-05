import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        Home
      </Route>
    </Switch>
  );
};
