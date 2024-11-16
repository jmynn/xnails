'use client';
import { StudioContext } from '@/providers/StudioProvider';
import styles from './index.module.css';
import { ReactNode, useContext } from 'react';
import TabStudios from '../TabStudios';

const TabsStudios = (): ReactNode => {
  const { tabs, currentTab, handleActive } = useContext(StudioContext);
  return (
    <div className={styles.tabs}>
      {tabs.map(({ _id, _title }) => (
        <TabStudios
          key={_id}
          handleClick={() => handleActive(_id)}
          title={_title}
          className={`${currentTab === _id ? styles._active : ''}`}
        />
      ))}
    </div>
  );
};

export default TabsStudios;
