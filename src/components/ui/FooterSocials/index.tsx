'use client'
import Link from 'next/link';
import IconFb from '../Icons/IconFb';
import IconInst from '../Icons/IconInst';
import IconMail from '../Icons/IconMail';
import IconVk from '../Icons/IconVk';
import Logo from '../Logo';
import styles from './index.module.css';
import { ReactNode } from 'react';

const FooterSocials = (): ReactNode => {
  return (
    <div className={styles.block}>
      <Logo />
      <div className={styles.socials}>
        <Link href='/'><IconInst /></Link>
        <Link href='/'><IconVk /></Link>
        <Link href='/'><IconFb /></Link>
        <Link href='/'><IconMail /></Link>
      </div>
    </div>
  );
};

export default FooterSocials;
