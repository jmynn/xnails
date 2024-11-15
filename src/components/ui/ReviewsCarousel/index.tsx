'use client';
import { $REVIEWS } from '@/data';
import CardReviewCarousel from '../CardReviewCarousel';
import { ReactNode, useMemo, useState } from 'react';

const ReviewsCarousel = (): ReactNode => {
  const reviewLength = useMemo(() => $REVIEWS.length, []);
  const [currentReview, setCurrentReview] = useState<number>(0);

  const handleIncrementCurrentReview = () => {
    if (currentReview + 1 > reviewLength - 1) {
      setCurrentReview(0);
      return;
    }
    setCurrentReview((prev) => prev + 1);
    return;
  };
  const handleDecrementCurrentReview = () => {
    if (currentReview - 1 < 0) {
      setCurrentReview(reviewLength - 1);
      return;
    }
    setCurrentReview((prev) => prev - 1);
    return;
  };

  return (
    <CardReviewCarousel
      handleToNext={handleIncrementCurrentReview}
      handleToPrevious={handleDecrementCurrentReview}
      {...$REVIEWS[currentReview]}
      key={currentReview}
    />
  );
};

export default ReviewsCarousel;
