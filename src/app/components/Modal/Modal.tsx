import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import styled from 'styled-components/macro';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useOnClickOutside } from 'app/hooks/useOnClickOutside';

//App
import { ModalWrapper, ModalHeader, ModalInner, Overlay } from './components';

const Button = styled.button`
  display: flex;
  border: none;
  color: rgb(255 255 255 / 30%);
  cursor: pointer;
  font-size: 22px;
  background-color: transparent;
  &:hover {
    color: rgb(255 255 255 / 95%);
  }
`;

interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode;
}

export interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
  title?: string;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({
  isShowing,
  toggle,
  title,
  children,
}) => {
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useOnClickOutside(ref, () => toggle());

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        toggle();
      }
    };

    if (isShowing) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isShowing, toggle]);

  return ReactDOM.createPortal(
    <NewAnimatePresence exitBeforeEnter>
      {isShowing && (
        <>
          <Overlay
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />
          <ModalWrapper
            key="modal"
            ref={ref}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 30,
            }}
          >
            <ModalInner>
              <ModalHeader>
                <h2
                  style={{
                    fontSize: '0.9rem',
                    color: '#fff',
                    marginRight: '15px',
                  }}
                >
                  {title}
                </h2>
                <Button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggle}
                >
                  <RiCloseCircleFill />
                </Button>
              </ModalHeader>
              {children}
            </ModalInner>
          </ModalWrapper>
        </>
      )}
    </NewAnimatePresence>,
    document.body,
  );
};

export default Modal;
