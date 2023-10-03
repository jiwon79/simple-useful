import React from "react";

import Footer from "component/common/Footer/Footer";
import Header from "component/common/Header/Header";
import StyleSheet from "@/component/common/StyleSheet";
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
      <StyleSheet/>
    </head>
    <body>
      <Header/>
        <main className={styles.main}>{children}</main>
      <Footer/>
    </body>
    </html>
  )
}

export default RootLayout;
