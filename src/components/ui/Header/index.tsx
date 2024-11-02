'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import Logo from '../Logo';
import Navbar from '../Navbar';
import styles from './index.module.css';
import { ReactNode, useEffect, useState } from 'react';
import ButtonSignUp from '../ButtonSignUp';
import ButtonBurger from '../ButtonBurger';

const Header = (): ReactNode => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1441px)');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  return (
    <header className={styles.header}>
      {/* 1440 */}
      {!isDesktop && <ButtonBurger {...{ isOpen, toggleMenu }} />}
      {/* 767 */}
      {isOpen && !isDesktop && <Navbar>{!isTablet && <ButtonSignUp />}</Navbar>}
      <Logo />
      {/* 1441 */}
      {isDesktop && <Navbar />}
      {/* 768 */}
      {isTablet && <ButtonSignUp />}
    </header>
  );
};

export default Header;
