'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from './index.module.css';
import { ReactNode } from 'react';
import FooterFeedback from '../FooterFeedback';
import FooterNavbar from '../FooterNavbar';
import FooterSocials from '../FooterSocials';
import FooterInfo from '../FooterInfo';
import Link from 'next/link';
import { $PATH_PRIVACY_POLICY } from '@/data';

const FooterBody = (): ReactNode => {
  const isLarge = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {!isLarge && (
        <>
          <FooterSocials />
          <FooterNavbar />
          <FooterFeedback />
        </>
      )}
      {isLarge && (
        <>
          <div className={styles.cl_1}>
            <FooterSocials />
            <FooterInfo />
          </div>
          <div className={styles.cl_2}>
            <FooterNavbar />
            <Link href={$PATH_PRIVACY_POLICY} className="_transition">
              политика конфиденциальности
            </Link>
          </div>
          <div className={styles.cl_3}>
            <FooterFeedback />
          </div>
        </>
      )}
    </>
  );
};

export default FooterBody;
