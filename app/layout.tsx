import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarEffect from '@/src/components/NavbarEffect';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Affillia Security',
  description: 'Personal close protection company for high-net-worth individuals.',
  icons: {
    icon: [
      {
        url: '/affsecicon2.png',
        sizes: '128x128',
        type: 'image/png'
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <NavbarEffect />
        {children}
      </body>
    </html>
  );
} 