import type { Metadata } from 'next';
import { Funnel_Display } from 'next/font/google';

import './globals.css';
import './components.css';

const funnelDisplay = Funnel_Display({
  variable: '--font-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Mahmoud Said',
  description:
    'Fourth-year undergraduate studying neuroscience & computer science',
  metadataBase: new URL('https://okmahmoud.com'),
  openGraph: {
    title: 'Mahmoud Said',
    description:
      'Fourth-year undergraduate studying neuroscience & computer science',
    type: 'website',
    url: 'https://okmahmoud.com',
    images: '/opengraph-image.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${funnelDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
