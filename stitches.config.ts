import { createStitches } from '@stitches/react';

export const {styled, getCssText} = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
  },
  utils: {
    heading_28: () => ({
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '36px',
    }),
    heading_20: () => ({
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '28px',
    }),
    heading_16: () => ({
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
    }),
    paragraph_18: () => ({
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '28px',
    })
  }
});
