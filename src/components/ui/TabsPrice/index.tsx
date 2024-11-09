'use client';
import { PriceContext } from '@/providers/PriceProvider';
import TabPrice from '../TabPrice';
import styles from './index.module.css';
import { ReactNode, useContext } from 'react';
import { $PRICE } from '@/data';

const TabsPrice = (): ReactNode => {
  const { keysPrice, activeTab, handleActive } = useContext(PriceContext);
  return (
    <div className={styles.tabs}>
      {keysPrice.map((key, i) => (
        <TabPrice
          key={`${i}-${key}`}
          isActive={activeTab === key}
          handleActive={() => handleActive(key)}
        >
          {$PRICE[key].title}
        </TabPrice>
      ))}
    </div>
  );
};

export default TabsPrice;
