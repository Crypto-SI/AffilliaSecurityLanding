import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Affillia Security - Elite Personal Protection',
  description: 'Providing discreet, professional personal security solutions for high-net-worth individuals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-light text-text-dark">
        <main>{children}</main>
      </body>
    </html>
  );
} 