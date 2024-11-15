'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import ReviewsCarousel from '@/components/ui/ReviewsCarousel';
import LinkReview from '@/components/ui/LinkReview';

const Reviews = (): ReactNode => {
  const isLarge = useMediaQuery('(min-width: 768px)');
  return (
    <div className={styles.reviews}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            <span>Мы</span> заботимся{'\n'} <span>о наших</span> клиентах{'\n'}{' '}
            <span className={styles._offset}>
              <span>и они</span> это ценят
            </span>
          </h2>
          {!isLarge && <LinkReview />}
          {isLarge && <ReviewsCarousel />}
        </div>
        <div className={styles.image}>
          <Image
            width={98}
            height={139}
            alt="review pic"
            sizes="100vw"
            style={{
              width: '100%',
              objectFit: 'cover',
              height: 'auto'
            }}
            src={
              'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Freviews%2F%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D1%8B.jfif?alt=media&token=15e2c7b5-9097-4ebc-9aa4-a688151b065a'
            }
          />
        </div>
      </div>
      {!isLarge && (
        <div className={styles.bottom}>
          <ReviewsCarousel />
        </div>
      )}
    </div>
  );
};

export default Reviews;
