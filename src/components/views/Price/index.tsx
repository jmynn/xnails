import styles from './index.module.css';
import { ReactNode } from 'react';
import TabsPrice from '@/components/ui/TabsPrice';
import PriceProvider from '@/providers/PriceProvider';
import SectionPrice from '@/components/ui/SectionPrice';

const Price = (): ReactNode => {
  return (
    <div className={styles.price}>
      <h2 className={styles.title}>Наши услуги</h2>
      <PriceProvider>
        <TabsPrice />
        <SectionPrice />
      </PriceProvider>
    </div>
  );
};

export default Price;
