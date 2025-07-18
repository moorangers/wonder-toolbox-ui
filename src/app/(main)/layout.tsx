import type { Metadata } from 'next';

import '../globals.css';
import { Noto_Sans_Mono } from 'next/font/google';

import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';
import { ThemeProvider } from '@/components/theme-provider';

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-noto-sans-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wonder Toolbox',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={notoSansMono.className}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="fixed top-0 left-0 w-full z-50">
            <Header />
          </div>
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
