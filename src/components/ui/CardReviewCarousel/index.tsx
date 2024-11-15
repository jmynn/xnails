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

type Props = TypeReview & {
  handleToNext: () => void;
  handleToPrevious: () => void;
};

const VISIBLE_STRING = 6;

const CardReviewCarousel: FunctionComponent<Props> = ({
  author,
  date,
  review,
  handleToNext,
  handleToPrevious
}) => {
  const moreRef = useRef<HTMLDivElement | null>(null);
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
    if (!moreRef.current) return;
    const lineHeight = +window
      .getComputedStyle(moreRef.current)
      .lineHeight.split('px')[0];
    const height = +window
      .getComputedStyle(moreRef.current)
      .height.split('px')[0];
    const visibleHeight = Math.round(lineHeight * VISIBLE_STRING);
    if (height < visibleHeight) {
      const computeVisibleString = Math.round(height / lineHeight);
      moreRef.current.style.height = `${computeVisibleString}lh`;
      handleSetTrueFullReview();
      setArrowsPosition(computeVisibleString);
      return;
    }
    moreRef.current.style.height = `${VISIBLE_STRING}lh`;
    setArrowsPosition(VISIBLE_STRING);
    return;
  }, []);

  useEffect(() => {
    if (!moreRef.current || !isFullReview) return;
    moreRef.current.style.height = '100%';
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
        <div className={styles.review}>
          <div className={styles.text} ref={moreRef} id="test">
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
