'use client';
import { StudioContext } from '@/providers/StudioProvider';
import styles from './index.module.css';
import { ReactNode, useContext, useMemo } from 'react';
import { $INFO_STUDIOS } from '@/data';
import Image from 'next/image';
import ButtonSignUp from '../ButtonSignUp';
import Link from 'next/link';

const SectionStudios = (): ReactNode => {
  const { currentTab } = useContext(StudioContext);
  const { address, description, map, phone, schedule, title } = useMemo(
    () => $INFO_STUDIOS.find((item) => item._id === currentTab)!,
    [currentTab]
  );
  return (
    <div className={styles.info} key={currentTab}>
      <div className={styles.body}>
        <div className={styles.description}>{description}</div>
        <Link href={`tel:${phone}`} className={'_transition'}>
          {phone}
        </Link>
        <div className={styles.address}>
          {title}
          {'\n'}
          {address}
        </div>
        <div className={styles.schedule}>{schedule}</div>
        <ButtonSignUp />
      </div>
      <div className={styles.map}>
        <Image
          src={map}
          alt="map studio"
          width={290}
          height={267}
          style={{
            width: '100%',
            objectFit: 'cover'
          }}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default SectionStudios;
