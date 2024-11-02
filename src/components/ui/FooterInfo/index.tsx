import styles from './index.module.css';
import { ReactNode } from 'react';

const FooterInfo = (): ReactNode => {
  return (
    <div className={styles.info}>
      <div className={styles.copyright}>© xnails 2021</div>
      <div className={styles.dev}>
        Design by @aleks_webdesign
        {`${''}`} Dev by @jmynn
      </div>
    </div>
  );
};

export default FooterInfo;
