import React from "react";
import Footer from "../component/common/Footer/Footer";
import Header from "../component/common/Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <title>Simple Useful</title>
      </head>
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}

export default RootLayout;
