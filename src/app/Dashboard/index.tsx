import React from 'react';
import { SearchBar } from 'src/components/SearchBar';
import axios from 'axios';
import { ReactTable } from './ReactTable';

export interface GithubData {
  data: any;
  users: Array<object>;
}

export const Dashboard = () => {
  const [state, setState] = React.useState<typeof undefined>();

  React.useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
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
    <div>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Dashboard
          </h1>
        </div>
      </header>
      <div className='flex flex-col items-center'>
        <SearchBar />
        <div className='space-x-4'>
          {state ? <ReactTable newData={state} /> : null}
        </div>
      </div>
    </div>
  );
};
