import type { Metadata } from 'next';
import { Courier_Prime, Funnel_Display, Roboto_Slab } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import './globals.css';
import './components.css';

import { Nav } from '~/components/nav';

const funnelDisplay = Funnel_Display({
  variable: '--font-sans',
  subsets: ['latin'],
});

const robotoSlab = Roboto_Slab({
  variable: '--font-serif',
  subsets: ['latin'],
});

const courierPrime = Courier_Prime({
  variable: '--font-mono',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: 'Mahmoud Said', template: '%s | Mahmoud Said' },
  description:
    'Johns Hopkins alum studying neuroscience & computer science',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  metadataBase: new URL('https://okmahmoud.com'),
  openGraph: {
    title: 'Mahmoud Said',
    description:
      'Johns Hopkins alum studying neuroscience & computer science',
    type: 'website',
    url: 'https://okmahmoud.com',
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}})()`,
          }}
        />
      </head>
      <body
        className={`${funnelDisplay.variable} ${courierPrime.variable} ${robotoSlab.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <div
            className="mx-auto flex min-h-screen justify-center py-20"
            style={{ paddingLeft: 'calc(100vw - 100%)' }}
          >
            <div className="flex w-2xl max-w-[90vw] flex-col items-center gap-6">
              <header className="flex w-full flex-col items-center sm:flex-row sm:justify-between">
                <div className="flex flex-col text-center sm:text-left">
                  <h1>Mahmoud Said</h1>
                  <p>msaid6 [at] jhu [dot] edu</p>
                </div>
                <Nav />
              </header>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
