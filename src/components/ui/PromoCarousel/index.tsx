'use client';
import { $PROMO_CARDS } from '@/data';
import {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from 'react';
import CardPromoCarousel from '../CardPromoCarousel';
import styles from './index.module.css';

type Props = {
  children?: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const PromoCarousel: FunctionComponent<Props> = ({ className }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const dots = useMemo(() => {
    const dotsArray = Array.from({ length: $PROMO_CARDS.length }, (_, i) => (
      <div
        className={`${styles.dot} ${currentPosition === i ? styles._active : ''} _transition`}
        key={i}
        onClick={() => setCurrentPosition(i)}
      ></div>
    ));
    return <div className={styles.dots}>{dotsArray}</div>;
  }, [currentPosition]);
  const {
    link,
    src,
    style,
    title,
    className: cls,
    text
  } = useMemo(() => $PROMO_CARDS[currentPosition], [currentPosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        if (prev + 1 > $PROMO_CARDS.length - 1) return 0;
        return prev + 1;
      });
    }, 8500);

    return () => {
      clearInterval(interval);
    };
  }, [currentPosition]);

  return (
    <div className={`${styles.carousel} ${className ?? ''}`}>
      <div className={styles.cards}>
        <CardPromoCarousel
          {...{ link, src, style, title, text }}
          className={!!cls ? styles[cls] : ''}
          width={1169}
          height={480}
          key={cls}
        />
      </div>
      {dots}
    </div>
  );
};

export default PromoCarousel;
