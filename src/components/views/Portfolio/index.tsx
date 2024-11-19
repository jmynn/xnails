import PortfolioCarousel from '@/components/ui/PortfolioCarousel';
import PortfolioProvider from '@/providers/PortfolioProvider';
import { ReactNode } from 'react';
import styles from './index.module.css';
import Headline from '@/components/ui/Headline';

const Portfolio = (): ReactNode => {
  return (
    <div className={styles.portfolio}>
      <Headline style={{ textAlign: 'center' }}>Портфолио</Headline>
      <PortfolioProvider>
        <PortfolioCarousel />
      </PortfolioProvider>
    </div>
  );
};

export default Portfolio;
