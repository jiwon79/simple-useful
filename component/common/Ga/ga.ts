declare const window: Window &
  typeof globalThis & {
    gtag: (param1: string, param2: string, param3: object) => void;
  };

export const pageView = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
