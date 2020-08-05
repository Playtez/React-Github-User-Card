import React from 'react';
import axios from 'axios';

import Card from './components/Card';
import { SearchBar } from './components/SearchBar';
import { Header } from './layout/Header';

export interface GithubData {
  data: any;
  users: Array<object>;
}

const App = ({ data, users }: GithubData) => {
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

export default App;
