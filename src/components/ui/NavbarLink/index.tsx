import { TypeLink } from '@/types';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './index.module.css';

type Props = TypeLink & {
  style?: {
    order?: number
  }
};

const NavbarLink: FunctionComponent<Props> = ({ href, label, style }) => {
  return (
    <Link className={styles.link + ' _transition'} href={href} {...{style}}>
      {label}
    </Link>
  );
};

export default NavbarLink;
