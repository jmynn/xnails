'use client';
import { $PATH_PRIVACY_POLICY } from '@/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
import { ReactNode } from 'react';
import FooterFeedback from '../FooterFeedback';
import FooterInfo from '../FooterInfo';
import FooterNavbar from '../FooterNavbar';
import FooterSocials from '../FooterSocials';
import styles from './index.module.css';

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
              Политика конфиденциальности
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
