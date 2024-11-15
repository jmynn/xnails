// import styles from "./page.module.css";
import Main from '@/components/views/Main';
import Present from '@/components/views/Present';
import Price from '@/components/views/Price';
import Promo from '@/components/views/Promo';
import Reviews from '@/components/views/Reviews';

export default function Home() {
  return (
    <>
      <Main />
      <Promo />
      <Price />
      {/* portfolio */}
      <Present />
      <Reviews />
    </>
  );
}
