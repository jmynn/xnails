import Link from 'next/link';
import styles from './index.module.css';
import { FunctionComponent } from 'react';
import { TypeNavLink } from '@/types';

type Props = TypeNavLink;

const NavbarLink: FunctionComponent<Props> = ({ href, label }) => {
  return (
    <Link className={styles.link + ' _transition'} href={href}>
      {label}
    </Link>
  );
};

export default NavbarLink;
