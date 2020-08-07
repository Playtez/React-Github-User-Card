import React from 'react';

export interface MainProps {
  children: React.ReactNode;
  [x: string]: any;
}

export const Main = ({ children, ...props }: MainProps) => {
  return (
    <main>
      <div>
        {/* <!-- Replace with your content --> */}
        <div>
          <div {...props}>{children}</div>
        </div>
        {/* <!-- /End replace --> */}
      </div>
    </main>
  );
};
