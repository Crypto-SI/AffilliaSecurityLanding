import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Affiliasecurity - Professional Security Services",
  description: "Comprehensive security solutions tailored to your needs with cutting-edge technology and expert personnel.",
  icons: {
    icon: [
      {
        url: '/affsecicon2.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/affsecicon2.png',
        type: 'image/png',
      },
    ],
    shortcut: ['/affsecicon2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
