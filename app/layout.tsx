'use client';

//import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
//import { IconChevronDown } from '@tabler/icons-react';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, Text } from '@mantine/core';
import { HeaderMenu } from './HeaderMenu'; // your custom nav
import { Footer } from './Footer'; // your custom nav
export function Logo() {
    return (
      <Text fw={700} size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
        Wealth Matters
      </Text>
    );
  }
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider>
            <HeaderMenu />
        <div style={{ minHeight: '80vh', paddingBottom: '4rem' }}>
            {children}
          </div>
        <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
