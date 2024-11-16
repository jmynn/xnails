import PortfolioCarousel from '@/components/ui/PortfolioCarousel';
import PortfolioProvider from '@/providers/PortfolioProvider';
import { ReactNode } from 'react';
import styles from './index.module.css';

const Portfolio = (): ReactNode => {
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.title}>Портфолио</h2>
      <PortfolioProvider>
        <PortfolioCarousel />
      </PortfolioProvider>
    </div>
  );
};

export default Portfolio;
