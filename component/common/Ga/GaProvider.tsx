"use client";
import { ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as ga from "@lib/ga";

const GaProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    ga.pageview( `${pathname}?${searchParams}`);
  }, [pathname, searchParams])

  return (
    <>{children}</>
  );
}

export default GaProvider;
