import styles from './index.module.css';
import { ReactNode } from 'react';
import TabsPrice from '@/components/ui/TabsPrice';
import PriceProvider from '@/providers/PriceProvider';
import SectionPrice from '@/components/ui/SectionPrice';
import Blob from '@/components/ui/Blob';
import Headline from '@/components/ui/Headline';

const Price = (): ReactNode => {
  return (
    <div className={styles.price}>
      <Headline style={{ textAlign: 'center' }}>Наши услуги</Headline>
      <PriceProvider>
        <TabsPrice />
        <SectionPrice />
      </PriceProvider>
      <Blob className={styles._b3} />
    </div>
  );
};

export default Price;
