import styles from './index.module.css';
import { FunctionComponent, HTMLAttributes } from 'react';

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const Blob: FunctionComponent<Props> = ({ className }) => {
  return <div className={`${styles.blob} ${className ?? ''}`}></div>;
};

export default Blob;
