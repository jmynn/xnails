import { TypePromoCard } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './index.module.css';
import Headline from '../Headline';

type Props = TypePromoCard & {
  width: number;
  height: number;
};

const CardPromoCarousel: FunctionComponent<Props> = ({
  height,
  link,
  src,
  title,
  width,
  text,
  style,
  className
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.image}>
        <Image
          width={width}
          height={height}
          src={src}
          alt="carousel card pic"
          style={style}
          sizes="100vw"
        />
      </div>
      <div className={styles.info}>
        <Headline className={styles.title}>{title}</Headline>
        {text && <div className={styles.text}>{text}</div>}
        <Link className={styles.more + ' _transition'} href={link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default CardPromoCarousel;
