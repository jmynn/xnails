import styles from './index.module.css';
import {
  CSSProperties,
  FunctionComponent,
  HTMLAttributes,
  ReactNode
} from 'react';

type Props = {
  children: ReactNode;
  style?: CSSProperties;
  className?: HTMLAttributes<HTMLHeadingElement>['className'];
};

const Headline: FunctionComponent<Props> = ({ children, style, className }) => {
  return (
    <h2 className={`${styles.title} ${className ?? ''}`} {...{ style }}>
      {children}
    </h2>
  );
};

export default Headline;
