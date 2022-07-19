import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as LoomLogo } from './assets/loominance-logo.svg';

export function Logos() {
  return (
    <Wrapper>
      <LoomLogo className="logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.border};

  .logo {
    width: 4.5rem;
    height: 4.5rem;
  }

  .sign {
    width: 2rem;
    height: 2rem;
    margin: 0 2rem;
  }
`;
