import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple Useful | Remove PDF New Line',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default layout;
