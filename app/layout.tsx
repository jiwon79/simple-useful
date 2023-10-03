import React from "react";

import Footer from "component/common/Footer/Footer";
import Header from "component/common/Header/Header";
import StitchesProvider from "@/component/common/StitchesProvider";
import GaProvider from "@/component/common/Ga/GaProvider";
import styles from "./layout.module.scss";
import 'styles/globals.scss'

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({children}: LayoutProps) => {
  return (
    <html>
    <head>
      <link rel="icon" href="/favicon.png"/>
    </head>
    <body>
    <GaProvider code={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}>
      <StitchesProvider>
        <Header/>
        <main className={styles.main}>{children}</main>
        <Footer/>
      </StitchesProvider>
    </GaProvider>
    </body>
    </html>
  )
}

export default RootLayout;
