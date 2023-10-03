import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import * as ga from "@lib/ga";

const GaProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>{children}</>
  );
}

export default GaProvider;
