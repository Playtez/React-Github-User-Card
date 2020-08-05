import React from 'react';

interface ProfileDropDownProps {
  open: boolean;
}

export const ProfileDropDown = ({ open }: ProfileDropDownProps) => {
  console.log({ open });

  return open ? (
    <div>
      <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'>
        <div
          className='py-1 rounded-md bg-white shadow-xs'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu'
        >
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            role='menuitem'
          >
            Your Profile
          </a>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            role='menuitem'
          >
            Settings
          </a>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            role='menuitem'
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  ) : null;
};
