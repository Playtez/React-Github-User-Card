import * as React from 'react';

interface CardProps {
  users: any;
}

const Card = ({ users }: CardProps) => {
  return users ? (
    <div className=''>
      {users.map((item: any) => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.avatar_url} alt='pics of users' />
              <h1>{item.login}</h1>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default Card;
