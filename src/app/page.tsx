import Main from '@/components/views/Main';
import Portfolio from '@/components/views/Portfolio';
import Present from '@/components/views/Present';
import Price from '@/components/views/Price';
import Promo from '@/components/views/Promo';
import Reviews from '@/components/views/Reviews';
import Studios from '@/components/views/Studios';

export default function Home() {
  return (
    <>
      <Main />
      <Promo />
      <Price />
      <Portfolio />
      <Present />
      <Reviews />
      <Studios />
    </>
  );
}
