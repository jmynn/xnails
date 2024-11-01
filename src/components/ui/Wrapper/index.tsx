import { FunctionComponent, ReactNode } from 'react';
import styles from './index.module.css';

type Props = {
	children: ReactNode;
};

const Wrapper: FunctionComponent<Props> = ({ children }): ReactNode => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
