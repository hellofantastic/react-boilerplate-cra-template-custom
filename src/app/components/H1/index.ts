import { makeResponsive } from 'atomic-layout';
import styled from 'styled-components';

interface H1Props {
  size?: number;
  textAlign?: string;
  [key: string]: any;
}

const H1 = styled.h1<H1Props>`
  font-size: ${({ size }) => (size ? size + 'rem' : '1.6rem')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  display: flex;
  flex-direction: column;

  > span {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;
export default makeResponsive(H1);
