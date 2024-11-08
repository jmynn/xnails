import Container from '@/components/ui/Container';
import Header from '@/components/ui/Header';
import Wrapper from '@/components/ui/Wrapper';
import '@/styles/nullstyle.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'XNAILS',
  description: 'Generated by create next app',
  icons: ['/logo.svg']
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
          <Wrapper>
            <Header />
            <div id="content">
              <Container>{children}</Container>
            </div>
            <Footer />
          </Wrapper>
      </body>
    </html>
  );
}
