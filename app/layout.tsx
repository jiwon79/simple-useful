import React from 'react';
import { ToastContainer } from 'react-toastify';

import Footer from 'component/common/Footer/Footer';
import { Header } from '@views/common/components';
import StitchesProvider from '@/component/common/StitchesProvider';
import GaProvider from '@/component/common/Ga/GaProvider';
import styles from './layout.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <GaProvider code={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}>
          <StitchesProvider>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
            <ToastContainer limit={2} />
          </StitchesProvider>
        </GaProvider>
      </body>
    </html>
  );
};

export default RootLayout;
