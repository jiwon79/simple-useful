import React from "react";

import Footer from "component/common/Footer/Footer";
import Header from "component/common/Header/Header";
import StitchesProvider from "@/component/common/StitchesProvider";
import 'styles/globals.scss'
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({children}: LayoutProps) => {
  return (
    <html>
    <head>
      <title>Simple Useful</title>
      <link rel="icon" href="/favicon.png"/>
    </head>
    <body>
    <StitchesProvider>
      <Header/>
      <main className={styles.main}>{children}</main>
      <Footer/>
    </StitchesProvider>
    </body>
    </html>
  )
}

export default RootLayout;
