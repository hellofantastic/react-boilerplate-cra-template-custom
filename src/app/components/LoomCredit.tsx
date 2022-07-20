import styled from 'styled-components';

const LoomBadge = styled.div`
  font-size: 0.6rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

interface ILoomCreditProps {
  styles?: Object;
}

export const LoomCredit = (props: ILoomCreditProps) => {
  const { styles } = props;
  return <LoomBadge style={styles}>Powered by Loominance</LoomBadge>;
};
