import Link from 'next/link';
import styles from './index.module.css';
import { ReactNode } from 'react';
import { $PATH_SIGNUP } from '@/data';

const ButtonSignUp = (): ReactNode => {
  return (
    <Link href={`${$PATH_SIGNUP}`} className={styles.signUp}>
      записаться
    </Link>
  );
};

export default ButtonSignUp;
