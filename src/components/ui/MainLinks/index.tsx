import Link from 'next/link';
import ButtonSignUp from '../ButtonSignUp';
import styles from './index.module.css';
import { ReactNode } from 'react';

const MainLinks = (): ReactNode => {
  return (
    <div className={styles.links}>
      <ButtonSignUp />
      <Link href={'/'} className={styles.findCost + ' _transition'}>
        Узнать стоимость
      </Link>
    </div>
  );
};

export default MainLinks;
