'use client';
import { $MAIN_PAGE_PICS } from '@/data';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import InfoBlock from '@/components/ui/InfoBlock';
import MainLinks from '@/components/ui/MainLinks';
import useMediaQuery from '@/hooks/useMediaQuery';
import Blob from '@/components/ui/Blob';

const aboutInfo = [
  {
    title: '4',
    subtitle: `года  мы радуем\n наших клиентов`
  },
  {
    title: '10 000+',
    subtitle: `маникюров мы сделали за\n последний год`
  },
  {
    title: '3+',
    subtitle: `наши мастера имеют\n опыт более 3 лет`
  }
];

const Main = (): ReactNode => {
  const isLarge = useMediaQuery('(min-width: 768px)');
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h2
          className={styles.subtitle}
        >{`XNAILS - студии маникюра\n в Санкт-Петербурге`}</h2>
        <h1 className={styles.title}>
          <span>Мы знаем все о</span> красивом{'\n'}
          <span>и</span> качественном{'\n'}
          <span>покрытии</span>
        </h1>
        {isLarge && <MainLinks />}
        <div className={styles.pictures}>
          <div className={styles.left}>
            {$MAIN_PAGE_PICS.other.map((src, i) => (
              <div className={styles.img} key={i}>
                <Image
                  alt="main block image"
                  {...{ src }}
                  width={45}
                  height={45}
                  style={{ width: '100%', objectFit: 'cover', height: 'auto' }}
                  sizes="100vw"
                  priority
                />
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <Image
              alt="main img"
              src={$MAIN_PAGE_PICS.main}
              width={137}
              height={141}
              style={{ width: '100%', objectFit: 'cover', height: 'auto' }}
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        {!isLarge && <MainLinks />}
        <div className={styles.info}>
          {aboutInfo.map((item, i) => (
            <InfoBlock key={i} {...item} />
          ))}
        </div>
      </div>
      <Blob className={styles._b1} />
      <Blob className={styles._b2} />
    </main>
  );
};

export default Main;
