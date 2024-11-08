import PromoCarousel from '@/components/ui/PromoCarousel';
import PromoProvider from '@/providers/PromoProvider';
import { ReactNode } from 'react';
import styles from './index.module.css';

const Promo = (): ReactNode => {
  return (
    <>
      <PromoProvider>
        <PromoCarousel />
      </PromoProvider>
    </>
  );
};

export default Promo;
