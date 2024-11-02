'use client';
import { $NAVBAR_LINKS } from '@/data';
import styles from './index.module.css';
import { ReactNode } from 'react';
import NavbarLink from '../NavbarLink';
import useMediaQuery from '@/hooks/useMediaQuery';

const NavbarLinks = (): ReactNode => {
  const isDesktop = useMediaQuery('(min-width: 1441px)');
  return (
    <div className={styles.links}>
      {isDesktop &&
        $NAVBAR_LINKS.desktop.map((link, i) => (
          <NavbarLink key={`${i}-${link.href}`} {...{ ...link }} />
        ))}
      {!isDesktop &&
        $NAVBAR_LINKS.mobile.map((link, i) => (
          <NavbarLink key={`${i}-${link.href}`} {...{ ...link }} />
        ))}
    </div>
  );
};

export default NavbarLinks;
