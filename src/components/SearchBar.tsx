import React from 'react';
import Mousetrap from 'mousetrap';
import { FaSearch } from 'react-icons/fa';

import { useDialogState } from 'reakit';

export const SearchBar = () => {
  const refInput = React.useRef(null);
  const searchBarState = useDialogState();

  console.log(searchBarState);

  Mousetrap.bind('/', (e) => {
    e.preventDefault();
    //@ts-ignore
    refInput.current.focus();
  });

  return (
    <div className='flex bg-grey-200'>
      <div className=''>
        <label htmlFor='input'></label>
        <input
          ref={refInput}
          id='input'
          type='text'
          placeholder='press "/" to focus'
        />
      </div>
      <FaSearch />
    </div>
  );
};
