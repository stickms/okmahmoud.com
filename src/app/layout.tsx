import type { Metadata } from 'next';
import { Courier_Prime, Funnel_Display } from 'next/font/google';

import './globals.css';
import './components.css';

import { PageSwitch, BioText } from '@/components/paths';

export const funnelDisplay = Funnel_Display({
  variable: '--font-sans',
  subsets: ['latin']
});

export const courierPrime = Courier_Prime({
  variable: '--font-mono',
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: { default: 'Mahmoud Said', template: '%s | Mahmoud Said' },
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
      <body
        className={`${funnelDisplay.variable} ${courierPrime.variable} antialiased`}
      >
        <div className='flex min-h-screen w-screen justify-center py-20 sm:pt-30'>
          <div className='flex w-[40rem] max-w-[85vw] flex-col items-center gap-4'>
            <header className='flex w-full flex-col items-center sm:flex-row sm:justify-between'>
              <div className='flex flex-col text-center sm:text-left'>
                <h1>Mahmoud Said</h1>
                <p>msaid6 [at] jhu [dot] edu</p>
              </div>
              <nav className='flex items-center gap-6'>
                <PageSwitch />
                <a href='https://github.com/stickms'>GitHub</a>
              </nav>
            </header>
            <div>
              <BioText />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
