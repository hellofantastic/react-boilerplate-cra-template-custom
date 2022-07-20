import { useState } from 'react';

const useModal = (initialValue: boolean): [boolean, () => void] => {
  const [isShowing, setIsShowing] = useState(initialValue);

  const toggleModal = () => setIsShowing(!isShowing);

  return [isShowing, toggleModal];
};

export default useModal;
