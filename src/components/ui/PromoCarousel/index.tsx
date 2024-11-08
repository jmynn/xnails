'use client';
import { $PROMO_CARDS } from '@/data';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import CardPromoCarousel from '../CardPromoCarousel';
import styles from './index.module.css';

type Props = {
  children?: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const PromoCarousel: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={`${styles.carousel} ${className ?? ''}`}>
      <div className={styles.cards}>
        {$PROMO_CARDS.map((card, i) => (
          <CardPromoCarousel
            key={i}
            {...{ ...card }}
            width={1169}
            height={411}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;
