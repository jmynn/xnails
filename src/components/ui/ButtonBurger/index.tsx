import { FunctionComponent } from 'react';
import IconBurger from '../Icons/IconBurger';
import IconClose from '../Icons/IconClose';
import styles from './index.module.css';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const ButtonBurger: FunctionComponent<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <button onClick={toggleMenu} className={styles.btnMenu}>
      {!isOpen && <IconBurger />}
      {isOpen && <IconClose />}
    </button>
  );
};

export default ButtonBurger;
