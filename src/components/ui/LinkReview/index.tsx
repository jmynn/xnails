import Link from 'next/link';
import styles from './index.module.css';
import { ReactNode } from 'react';
import { $PATH_REVIEW } from '@/data';

const LinkReview = (): ReactNode => {
  return (
    <Link href={$PATH_REVIEW} className={styles.link + ' _transition'}>
      Оставить отзыв
    </Link>
  );
};

export default LinkReview;
