import React from 'react';
import { Header, Main } from './';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  console.log({ children });
  return (
    <div>
      <header className='top-0 left-0 z-10 w-full'>
        <Header />
      </header>
      <Main>{children}</Main>
      <footer className='hidden w-full md:block'>I am Footer</footer>
    </div>
  );
};
