import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <div className='ml-10 flex items-baseline'>
        <Link
          to='/'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Dashboard
        </Link>
        <Link
          to='/home'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Home
        </Link>
        <Link
          to='/'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Data Entry
        </Link>
        <Link
          to='/'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Employee Information
        </Link>
        <Link
          to='/'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Reports
        </Link>
      </div>
    </nav>
  );
};
