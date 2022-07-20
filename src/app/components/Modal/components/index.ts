import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #373f61;
  opacity: 0.6;
`;
export const ModalWrapper = styled(motion.div)`
  display: inline-table;
  position: fixed;
  padding: 0.5rem;
  top: 22%;
  left: 0;
  right: 0;
  z-index: 1050;
  margin: auto;
  width: auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;
export const ModalInner = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;

  box-shadow: 15px 15px 26px -2px rgb(55 63 97 / 70%);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: rgb(77 94 109);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;
