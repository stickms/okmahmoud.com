import type { Metadata } from 'next';
import { Funnel_Display } from 'next/font/google';

import './globals.css';
import './components.css';

const funnelDisplay = Funnel_Display({
  variable: '--font-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'okmahmoud',
  description: 'Ok Mahmoud'
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
