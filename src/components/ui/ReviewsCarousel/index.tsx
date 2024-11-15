'use client';
import { $REVIEWS } from '@/data';
import CardReviewCarousel from '../CardReviewCarousel';
import styles from './index.module.css';
import { ReactNode, useMemo, useState } from 'react';

const ReviewsCarousel = (): ReactNode => {
  const reviewLength = useMemo(() => {
    console.log('🚀 ~ reviewLength ~ reviewLength:');
    return $REVIEWS.length;
  }, []);
  const [currentReview, setCurrentReview] = useState<number>(0);

  const handleIncrementCurrentReview = () => {
    console.log(
      '🚀 ~ handleIncrementCurrentReview ~ handleIncrementCurrentReview:'
    );
    if (currentReview + 1 > reviewLength - 1) {
      setCurrentReview(0);
      return;
    }
    setCurrentReview((prev) => prev + 1);
    return;
  };
  const handleDecrementCurrentReview = () => {
    console.log(
      '🚀 ~ handleDecrementCurrentReview ~ handleDecrementCurrentReview:'
    );
    if (currentReview - 1 < 0) {
      setCurrentReview(reviewLength - 1);
      return;
    }
    setCurrentReview((prev) => prev - 1);
    return;
  };
  return (
    <div className={styles.carousel}>
      <CardReviewCarousel
        handleToNext={handleIncrementCurrentReview}
        handleToPrevious={handleDecrementCurrentReview}
        {...$REVIEWS[currentReview]}
        key={currentReview}
      />
    </div>
  );
};

export default ReviewsCarousel;
