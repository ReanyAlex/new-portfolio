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
      <button onClick={() => document.querySelector('#introduction').classList.remove('skills')}>Move up</button>
      <Charts />
      <button onClick={() => document.querySelector('#introduction').classList.add('projects')}>Move Down</button>
    </div>
  );
}
