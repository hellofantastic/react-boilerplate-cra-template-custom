import { makeResponsive } from 'atomic-layout';
import styled from 'styled-components/macro';

interface IHeadingStyled {
  size?: number;
}

const H3 = styled('h3')<IHeadingStyled>`
  font-size: ${({ size }) => (size ? size + 'rem' : '1.3rem')};
`;
export default makeResponsive(H3);
