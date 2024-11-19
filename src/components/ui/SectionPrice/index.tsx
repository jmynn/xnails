'use client';
import { PriceContext } from '@/providers/PriceProvider';
import styles from './index.module.css';
import { ReactNode, useContext } from 'react';
import { $PRICE } from '@/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import ButtonSignUp from '../ButtonSignUp';
import Blob from '../Blob';

const SectionPrice = (): ReactNode => {
  const { activeTab } = useContext(PriceContext);
  const isLarge = useMediaQuery('(min-width: 768px)');
  return (
    <div className={styles.section} key={activeTab}>
      <div className={styles.items}>
        {$PRICE[activeTab].items.map((item, i) => (
          <div
            className={styles.item}
            key={`${i}-${item.title}`}
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div className={styles.label}>{item.title}</div>
            <div className={styles.value}>{item.cost}</div>
          </div>
        ))}
        <ButtonSignUp />
      </div>
      {isLarge && (
        <div className={styles.pictures}>
          <Image
            src={$PRICE[activeTab].images.ellipse}
            width={245}
            height={281}
            sizes="100vw"
            className={styles.ellipse}
            alt="pic for section"
            style={{
              width: '82%',
              height: 'fit-content',
              objectFit: 'cover',
              maxWidth: '361px'
            }}
          />
          <Image
            src={$PRICE[activeTab].images.half}
            width={142}
            height={177}
            sizes="100vw"
            className={`${styles.half} ${styles[$PRICE[activeTab].id] ?? ''}`}
            alt="pic for section"
            style={{
              width: '45%',
              height: 'auto',
              objectFit: 'cover',
              maxWidth: '208px'
            }}
          />
        </div>
      )}
      {isLarge && <Blob className={styles._b5} />}
    </div>
  );
};

export default SectionPrice;
