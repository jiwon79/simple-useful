"use client";
import { ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as ga from "@/component/common/Ga/ga";
import Script from "next/script";

const GaProvider = ({code, children}: { code: string, children: ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ga.pageView(`${pathname}?${searchParams}`);
  }, [pathname, searchParams]);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${code}`}/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${code}');
        `}
      </Script>
      {children}
    </>
  );
}

export default GaProvider;
