import * as React from 'react';
import styled from 'styled-components/macro';
import { Logos } from './Logos';
import { Title } from './components/Title';
import { Lead } from './components/Lead';


export function Masthead() {
  return (
    <Wrapper>
      <Logos />
      <Title>Custom Boilerplate App</Title>
      <Lead>
       Remove this most likley and start developing
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
