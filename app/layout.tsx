import React, { CSSProperties } from 'react';
import { ToastContainer } from 'react-toastify';

import Footer from 'component/common/Footer/Footer';
import { Header } from '@views/common/components';
import StitchesProvider from '@/component/common/StitchesProvider';
import GaProvider from '@/component/common/Ga/GaProvider';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <GaProvider code={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}>
          <StitchesProvider>
            <Header />
            <main style={mainStyle}>{children}</main>
            <Footer />
            <ToastContainer limit={2} />
          </StitchesProvider>
        </GaProvider>
      </body>
    </html>
  );
};

const mainStyle: CSSProperties = {
  maxWidth: '1024px',
  margin: '0 auto',
  flex: 1,
};

export default RootLayout;
