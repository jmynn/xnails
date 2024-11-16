import Image from 'next/image';
import styles from './index.module.css';
import { FunctionComponent } from 'react';

type Props = {
  url: string;
  isRound: boolean;
};

const CardPortfolioCarousel: FunctionComponent<Props> = ({ isRound, url }) => {
  return (
    <div
      className={`${styles.item} ${isRound ? styles._round : '_transition'}`}
    >
      {!isRound && (
        <Image
          src={url}
          alt="pic item portfolio"
          width={138}
          height={184}
          sizes="100vw"
          style={{
            width: '100%',
            objectFit: 'cover',
            height: '100%'
          }}
        />
      )}
      {isRound && (
        <>
          <div className={styles.image + (isRound ? ' _transition' : '')}>
            <Image
              src={url}
              alt="pic item portfolio"
              width={138}
              height={91}
              sizes="100vw"
              style={{
                width: '100%',
                objectFit: 'cover',
                height: '100%'
              }}
            />
          </div>
          <div className={styles.text}>
            Больше работ{'\n'} можно найти{'\n'} в нашем <span>Instagram</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPortfolioCarousel;
