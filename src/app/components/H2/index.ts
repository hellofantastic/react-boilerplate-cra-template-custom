import { makeResponsive } from 'atomic-layout';
import styled from 'styled-components';

interface H2Props {
  fontSize?: string;
}
const H2 = styled.h2<H2Props>`
  font-size: ${p => (p.fontSize ? p.fontSize : '1.3rem')};
`;
export default makeResponsive(H2);
