import React, { useEffect } from 'react';
import Head from 'next/head';
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';
import { MainHeadProps } from '../_types';
import { ANALYTICS_ID } from '../_constants';
import Favicon from '../components/Favicon';

const analytics = Analytics({
  app: 'ValentinaMorales',
  version: '1',
  plugins: [
    googleAnalytics({
      trackingId: ANALYTICS_ID,
    }),
  ],
});

export { analytics };

const MainHead: React.FC<MainHeadProps> = ({
  title = 'Hola Soy Vale',
  pageTitle = null,
  children,
}: MainHeadProps) => {
  const theTitle = pageTitle ? `${title} - ${pageTitle}` : title;

  useEffect(() => {
    analytics.page();
  });

  return (
    <Head>
      <title>{theTitle}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <Favicon />
      {children}
    </Head>
  );
};

export default MainHead;
