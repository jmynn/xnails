import Container from '../Container';
import FooterBody from '../FooterBody';
import styles from './index.module.css';
import { ReactNode } from 'react';

const Footer = (): ReactNode => {
  return (
   <Container>
      <footer className={styles.footer}>
        <FooterBody />
      </footer>
   </Container>
  );
};

export default Footer;
