'use client'
import styles from './index.module.css';
import { FunctionComponent } from 'react';

type Props = {
  children: string;
  isActive: boolean;
  handleActive: () => void;
};

const TabPrice: FunctionComponent<Props> = ({ children, isActive, handleActive }) => {
  return <div className={`${styles.tab} ${isActive ? styles._active : ''} _transition`} onClick={handleActive}>{children}</div>;
};

export default TabPrice;
