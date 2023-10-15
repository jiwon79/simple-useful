import { createStitches } from '@stitches/react';

export const {styled, getCssText} = createStitches({
  media: {
    mobile: '(max-width: 400px)',
    tablet: '(max-width: 768px)',
    desktop: '(max-width: 1024px)',
  },
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      grey100: '#FFFFFF',
      grey150: '#F6F7F9',
      grey200: '#EEF1F5',
      grey250: '#DFE4E8',
      grey300: '#CDD3D9',
      grey400: '#AAB1BC',
      grey500: '#9198A4',
      grey600: '#7B818E',
      grey650: '#626575',
      grey700: '#494B53',
      grey800: '#2e2e2e',
      baseWhite: '#FFFFFF',
      baseWarning: '#FB6F43',
      baseNormalGray: '#E6E6E6',
      main100: '#ac55ff',
      main200: '#D09CFA',
      main300: '#F3CCFF',
      main400: '#f6e9ff',
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
    paragraph_21: () => ({
      fontWeight: 400,
      fontSize: '21px',
      lineHeight: '32px',
    }),
    paragraph_18: () => ({
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '28px',
    }),
    paragraph_16: () => ({
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    }),
    paragraph_14: () => ({
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
    }),
    label_18: () => ({
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '24px',
    }),
  }
});
