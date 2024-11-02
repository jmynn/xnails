import { $MAIN_PAGE_PICS } from '@/data';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';

const Main = (): ReactNode => {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h2 className={styles.subtitle}>{`XNAILS - студии маникюра 
${' '} в Санкт-Петербурге`}</h2>
        <h1 className={styles.title}>
          <span>Мы знаем все о</span> красивом
          {`${''}`}
          <span>и</span> качественном <span>покрытии</span>
        </h1>
        <div className={styles.pictures}>
          <div className={styles.left}>
            {
              $MAIN_PAGE_PICS.other.map((src, i) => <Image alt='main block image' {...{src}} key={i} width={45} height={45} style={{width: '100%', objectFit: 'cover'}} sizes='100vw' priority />)
            }
          </div>
          <div className={styles.right}>
            <Image alt='main img' src={$MAIN_PAGE_PICS.main} width={137} height={141} style={{width: '100%', objectFit: 'cover'}} sizes='100vw' priority />
          </div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </main>
  );
};

export default Main;
