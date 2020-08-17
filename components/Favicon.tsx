import React from 'react';

const faviconFolder = '/favicon';

const Favicon: React.FC = () => {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href={`${faviconFolder}/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${faviconFolder}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${faviconFolder}/favicon-16x16.png`} />
      <link rel="manifest" href={`${faviconFolder}/site.webmanifest`} />
      <link rel="mask-icon" href={`${faviconFolder}/safari-pinned-tab.svg`} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#813ef6" />
    </>
  );
};

export default Favicon;
