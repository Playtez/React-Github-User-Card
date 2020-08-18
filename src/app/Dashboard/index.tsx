import React from 'react';
import { SearchBar } from 'src/components/SearchBar';
import { ReactTable } from './ReactTable';

export interface GithubData {
  state: any;
}

export const Dashboard = ({ state }: GithubData) => {
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
