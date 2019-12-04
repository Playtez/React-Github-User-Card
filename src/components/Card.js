import React from "react";
import styled from "styled-components";

import "./Card.css";

const Card = props => {
  console.log(props);

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3%;
    margin: 2%;
    border: 1px solid black;
    border-radius: 12px;
  `;

  const Image = styled.img`
    width: 200px;
  `;
  return (
    <div className="card">
      {props.users.map(item => {
        return (
          <Wrapper key={item.id}>
            <div>
              <Image
                className={Image}
                src={item.avatar_url}
                alt="pics of users"
              />
              <h1>{item.login}</h1>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Card;
