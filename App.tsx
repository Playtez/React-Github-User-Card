import React from 'react';
import axios from 'axios';

import Card from './src/components/Card';
import { SearchBar } from './src/components/SearchBar';
import { Header } from './src/layout/Header';

export interface GithubData {
  data: any;
  users: Array<object>;
}

export const App = ({ data, users }: GithubData) => {
  const [state, setState] = React.useState<typeof users | undefined>();

  React.useEffect(() => {
    axios
      .get('https://api.github.com/users/playtez/followers')
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <Card users={state} />
    </div>
  );
};
