import React from 'react';

export const Navigation = () => {
  return (
    <nav>
      <div className='ml-10 flex items-baseline'>
        <a
          href='#'
          className='px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Dashboard
        </a>
        <a
          href='#'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Team
        </a>
        <a
          href='#'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Projects
        </a>
        <a
          href='#'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Calendar
        </a>
        <a
          href='#'
          className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
        >
          Reports
        </a>
      </div>
    </nav>
  );
};
