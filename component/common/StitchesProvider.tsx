'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { getCssText, globalStyles } from '@/stitches.config';

const StitchesRegistry = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line consistent-return
  useServerInsertedHTML(() => {
    if (typeof window === 'undefined') {
      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      );
    }
  });

  globalStyles();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default StitchesRegistry;
