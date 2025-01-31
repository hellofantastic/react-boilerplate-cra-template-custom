import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from 'app/components/Logo';
import { Title } from './components/Title';
import { Lead } from './components/Lead';

export function Masthead() {
  return (
    <Wrapper>
      <Logo />
      <Title>Custom Boilerplate App</Title>
      <Lead>Remove this most likley and start developing</Lead>
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
