import styles from './index.module.css';
import { ReactNode } from 'react';
import TabsStudios from '@/components/ui/TabsStudios';
import SectionStudios from '@/components/ui/SectionStudios';
import StudioProvider from '@/providers/StudioProvider';
import Headline from '@/components/ui/Headline';

const Studios = (): ReactNode => {
  return (
    <div className={styles.studios}>
      <Headline>Наши студии</Headline>
      <StudioProvider>
        <TabsStudios />
        <SectionStudios />
      </StudioProvider>
    </div>
  );
};

export default Studios;
