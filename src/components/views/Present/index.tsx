import Image from 'next/image';
import styles from './index.module.css';
import { ReactNode } from 'react';
import ButtonSignUp from '@/components/ui/ButtonSignUp';
import Link from 'next/link';
import { $PATH_PRESENT_MORE } from '@/data';
import Blob from '@/components/ui/Blob';

const Present = (): ReactNode => {
  return (
    <div className={styles.present}>
      <div className={styles.image}>
        <Image
          width={138}
          height={179}
          alt="image present"
          sizes="100vw"
          src={
            'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/xnails%2Fpresent%2F%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F.png?alt=media&token=d99a758a-5796-4f9e-ad35-ed1749eca1b5'
          }
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>Не знаете, что подарить?</h2>
        <div className={styles.text}>
          Подарочный сертификат – это приятный сюрприз для Ваших близких и
          идеальный подарок коллеге, который обязательно порадует и подарит
          массу положительных эмоций!
          {'\n'}Вы можете оформить, как сертификат на бумажном носителе, так и в
          электронном виде.
        </div>
        <div className={styles.more}>
          <ButtonSignUp />
          <Link href={$PATH_PRESENT_MORE} className="_transition">
            Подробнее
          </Link>
        </div>
      </div>
      <Blob className={styles._b4} />
    </div>
  );
};

export default Present;
