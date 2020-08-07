import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from 'src/layout';
import { Dashboard } from './Dashboard/index';

export const App = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Layout>
    </Switch>
  );
};
