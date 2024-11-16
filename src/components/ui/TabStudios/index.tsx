'use client';
import { TypeStudioInfo } from '@/types';
import styles from './index.module.css';
import { FunctionComponent, HTMLAttributes } from 'react';

type Props = {
  handleClick: () => void;
  title: TypeStudioInfo['_title'];
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const TabStudios: FunctionComponent<Props> = ({
  handleClick,
  title,
  className
}) => {
  return (
    <div
      className={`${styles.tab} ${className} _transition`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default TabStudios;
