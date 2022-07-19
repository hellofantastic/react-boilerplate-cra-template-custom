/**
 * Asynchronously loads the component for Sign In
 */

import * as React from 'react';
import { lazyLoad } from '../../../utils/loadable';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import styled from 'styled-components/macro';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignIn = lazyLoad(
  () => import('./Features/SignIn/index'),
  module => module.SignIn,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);
