import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from 'src/layout';
import { Dashboard } from './Dashboard/index';
import Axios from 'axios';

export const App = () => {
  const [state, setState] = React.useState<typeof undefined>();

  React.useEffect(() => {
    Axios.get('https://swapi.dev/api/people')
      .then((res) => {
        setState(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!state) {
    return <h1>Loading... </h1>;
  }

  return (
    <Switch>
      <Layout>
        <Route exact path='/'>
          <Dashboard state={state} />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Layout>
    </Switch>
  );
};
