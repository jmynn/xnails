'use client';
import Link from 'next/link';
import NavbarLinks from '../NavbarLinks';
import styles from './index.module.css';
import { FunctionComponent, ReactNode } from 'react';
import { $CONTACT_NUMBER } from '@/data';
import Logo from '../Logo';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  children?: ReactNode;
};

const Navbar: FunctionComponent<Props> = ({ children }) => {
  const isLarge = useMediaQuery('(min-width: 1441px)');
  return (
    <nav className={styles.nav}>
      {!isLarge && (
        <div className={styles.logo}>
          <Logo />
        </div>
      )}
      <NavbarLinks />
      <div className={styles.phone + ' _transition'}>
        <Link href={`tel:${$CONTACT_NUMBER}`}>{$CONTACT_NUMBER}</Link>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
