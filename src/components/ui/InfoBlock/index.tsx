import styles from './index.module.css';
import { FunctionComponent} from 'react';

type Props = {
  title: string;
  subtitle: string;
}

const InfoBlock:FunctionComponent<Props> =  ({subtitle, title}) => {
  return (
     <div className={styles.block}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.subtitle}>{subtitle}</div>
     </div>
  );
};

export default InfoBlock;