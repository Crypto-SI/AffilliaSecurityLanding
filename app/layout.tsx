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
      <body className={inter.className}>
        <NavbarEffect />
        {children}
      </body>
    </html>
  );
} 
