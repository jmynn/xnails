'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import IconArrowCarousel from '../Icons/IconArrowCarousel';
import IconQuotes from '../Icons/IconQuotes';
import IconStar from '../Icons/IconStar';
import LinkReview from '../LinkReview';
import styles from './index.module.css';
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { TypeReview } from '@/types';
import calcCountVisibleString from '@/services/calcHeightVisibleText';

type Props = TypeReview & {
  handleToNext: () => void;
  handleToPrevious: () => void;
};

const CardReviewCarousel: FunctionComponent<Props> = ({
  author,
  date,
  review,
  handleToNext,
  handleToPrevious
}) => {
  const reviewRef = useRef<HTMLDivElement | null>(null);
  const arrowLeftRef = useRef<HTMLDivElement | null>(null);
  const arrowRightRef = useRef<HTMLDivElement | null>(null);
  const [isFullReview, setIsFullReview] = useState<boolean>(false);
  const isLarge = useMediaQuery('(min-width: 768px)');
  const handleSetTrueFullReview = () => setIsFullReview(true);
  const setArrowsPosition = useCallback((position: number) => {
    if (!arrowLeftRef.current || !arrowRightRef.current) return;
    const newPosition = position / 2;
    arrowLeftRef.current.style.translate = `0 ${newPosition}lh`;
    arrowRightRef.current.style.translate = `0 ${newPosition}lh`;
    return;
  }, []);

  useLayoutEffect(() => {
    if (!reviewRef.current) return;
    const computedVisibleString = calcCountVisibleString(
      reviewRef.current,
      () => handleSetTrueFullReview()
    );
    reviewRef.current.style.height = `${computedVisibleString}lh`;
    setArrowsPosition(computedVisibleString);
    return;
  }, []);

  useEffect(() => {
    if (!reviewRef.current || !isFullReview) return;
    reviewRef.current.style.height = '100%';
  }, [isFullReview]);

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <IconQuotes />
        <div className={styles.info}>
          <div className={styles.author}>{author}</div>
          <div className={styles.data}>
            <div className={styles.rate}>
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
            <div className={styles.date}>{date}</div>
          </div>
        </div>
        {isLarge && <LinkReview />}
      </div>
      <div className={styles.bottom}>
        <div
          className={styles.arrow + ' _transition'}
          onClick={handleToPrevious}
          ref={arrowLeftRef}
        >
          <IconArrowCarousel direction="left" />
        </div>
        <div>
          <div className={styles.text} ref={reviewRef} id="test">
            {review}
          </div>
          {!isFullReview && (
            <button
              className={styles.more + ' _transition'}
              onClick={handleSetTrueFullReview}
            >
              ещё...
            </button>
          )}
        </div>
        <div
          className={styles.arrow + ' _transition'}
          onClick={handleToNext}
          ref={arrowRightRef}
        >
          <IconArrowCarousel direction="right" />
        </div>
      </div>
    </div>
  );
};

export default CardReviewCarousel;
