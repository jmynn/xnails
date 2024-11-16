'use client';
import { PortfolioContext } from '@/providers/PortfolioProvider';
import {
  ReactNode,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import styles from './index.module.css';
import CardPortfolioCarousel from '../CardPortfolioCarousel';
import useMediaQuery from '@/hooks/useMediaQuery';
import IconArrowCarousel from '../Icons/IconArrowCarousel';

const PortfolioCarousel = (): ReactNode => {
  const { urls } = useContext(PortfolioContext);
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isLarge = useMediaQuery('(min-width: 1441px)');

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentPositionCarousel, setCurrentPositionCarousel] = useState(0);
  const countDots = useMemo(() => {
    if (!urls) return 0;
    return Math.round(urls?.length / 2);
  }, [urls]);
  const handleCurrentPosition = useCallback(
    (position: number | 'inc' | 'dec') => {
      if (typeof position === 'number') {
        setCurrentPositionCarousel(position);
        return;
      }
      if (position === 'inc') {
        setCurrentPositionCarousel((prev) => {
          if (prev + 1 > countDots - 1) return 0;
          return prev + 1;
        });
        return;
      }
      if (position === 'dec') {
        setCurrentPositionCarousel((prev) => {
          if (prev - 1 < 0) return countDots - 1;
          return prev - 1;
        });
        return;
      }
    },
    [countDots]
  );

  const dots = useMemo(() => {
    if (!urls) return <></>;
    return Array.from({ length: countDots }, (_, i) => (
      <div
        key={i}
        className={
          styles.dot +
          ' _transition ' +
          (i === currentPositionCarousel ? styles._active : '')
        }
        onClick={() => handleCurrentPosition(i)}
      />
    ));
  }, [urls, currentPositionCarousel, countDots]);

  useLayoutEffect(() => {
    if (!carouselRef.current) return;
    if (currentPositionCarousel === 0) {
      carouselRef.current.style.translate = `0 0`;
      return;
    }
    const el = carouselRef.current;
    const widthContainer = el.offsetWidth;
    const widthChild = +window
      .getComputedStyle(el.children[0])
      .width.split('px')[0];
    const gapCarousel = +window.getComputedStyle(el).gap.split('px')[0];
    const gap =
      currentPositionCarousel === 1 ? gapCarousel * 3 : gapCarousel * 2;
    const calcWidthChildWithGap = widthChild + gap;
    const percentTranslate =
      Math.round((calcWidthChildWithGap / widthContainer) * 100 * -1) *
      currentPositionCarousel;

    carouselRef.current.style.translate = `${percentTranslate}% 0`;
  }, [currentPositionCarousel]);

  return (
    <div className={styles.section}>
      <div className={styles.top}>
        {isLarge && (
          <div
            className={styles.arrow + ' _transition'}
            onClick={() => handleCurrentPosition('dec')}
          >
            <IconArrowCarousel direction="left" />
          </div>
        )}
        <div className={styles.body}>
          {!urls && <h3 className={styles._error}>Nothing not found</h3>}
          {urls && (
            <div className={styles.carousel} ref={carouselRef}>
              {urls.map((url, i) => (
                <CardPortfolioCarousel key={i} {...{ url }} isRound={i === 1} />
              ))}
            </div>
          )}
        </div>
        {isLarge && (
          <div
            className={styles.arrow + ' _transition'}
            onClick={() => handleCurrentPosition('inc')}
          >
            <IconArrowCarousel direction="right" />
          </div>
        )}
      </div>
      {isTablet && urls && <div className={styles.dots}>{dots}</div>}
    </div>
  );
};

export default PortfolioCarousel;
