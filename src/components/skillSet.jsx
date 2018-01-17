import React from 'react';
import styled from 'styled-components';
import Charts from '../components/skillChart/Chart';

const Icons = styled.span`
  font-size: 2rem;
  color: yellow;
`;

export default function() {
  return (
    <div id="skillSet">
      <h2>Skills:</h2>
      <Charts />
      <ul>
        <li>
          <Icons>&#x25CB; &#x25CF;</Icons> JavaScript (ES6)
        </li>
        <li>Node.js</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>SASS</li>
        <li>CSS 3</li>
        <li>HTML 5</li>
        <li>jQuery</li>
        <li>Python</li>
      </ul>
    </div>
  );
}
