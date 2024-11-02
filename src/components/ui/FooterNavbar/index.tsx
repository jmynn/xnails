'use client';
import { $FOOTER_LINKS } from '@/data';
import styles from './index.module.css';
import { ReactNode } from 'react';
import NavbarLink from '../NavbarLink';
import useMediaQuery from '@/hooks/useMediaQuery';

const FooterNavbar = (): ReactNode => {
  const isLarge = useMediaQuery('(min-width: 768px)')
  return (
    <div className={styles.links}>
      {!isLarge && $FOOTER_LINKS.mobile.map((link, i) => (
        <NavbarLink key={`${i}-${link.href}`} {...{ ...link }} />
      ))}
       {isLarge && $FOOTER_LINKS.desktop.map((link, i) => (
        <NavbarLink key={`${i}-${link.href}`} {...{ ...link }} />
      ))}
    </div>
  );
};

export default FooterNavbar;
