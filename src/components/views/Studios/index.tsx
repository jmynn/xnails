import styles from './index.module.css';
import { ReactNode } from 'react';
import TabsStudios from '@/components/ui/TabsStudios';
import SectionStudios from '@/components/ui/SectionStudios';
import StudioProvider from '@/providers/StudioProvider';

const Studios = (): ReactNode => {
  return (
    <div className={styles.studios}>
      <h2 className={styles.title}>Наши студии</h2>
      <StudioProvider>
        <TabsStudios />
        <SectionStudios />
      </StudioProvider>
    </div>
  );
};

export default Studios;
