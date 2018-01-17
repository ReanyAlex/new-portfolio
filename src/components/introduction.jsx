import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: 'Cormorant Garamond', serif;
`;

const TextDiv = styled.div`
  max-width: 740px;
  margin: 0 auto;
  font-size: 1.5rem;
`;

export default function() {
  return (
    <div id="introduction">
      <Header>Alex Reany's Portfolio Page</Header>
      <h2>About:</h2>
      <TextDiv>
        <p>
          Self Motivated Software Developer. I have experience working on and managing teams. Dedicated to continual
          learning and expanding my skill sets.
        </p>
        <p>
          Passionate about anything to do with food. Love finding new and exciting things to eat. When I am not eating I
          enjoy spending time outdoors with family and friends.
        </p>
      </TextDiv>
    </div>
  );
}
