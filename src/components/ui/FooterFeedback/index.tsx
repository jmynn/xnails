'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import FormFeedback from '../FormFeedback';
import styles from './index.module.css';
import { ReactNode } from 'react';
import FooterInfo from '../FooterInfo';

const FooterFeedback = (): ReactNode => {
  const isLarge = useMediaQuery('(min-width: 768px)');
  return (
    <div className={styles.feedback}>
      <div className={styles.text}>Узнавайте первым о новых акциях!</div>
      <FormFeedback />
      {!isLarge && <FooterInfo />}
    </div>
  );
};

export default FooterFeedback;
