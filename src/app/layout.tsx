import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import ClientLayout from './components/ClientLayout';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Haktan TEKİN - Senior Frontend Developer",
  description: "Freelance veya tam zamanlı. 15 yılı aşkın tecrübeli bir frontend developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontClasses = `${inter.variable} ${mono.variable}`;
  
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <ClientLayout fontClasses={fontClasses}>
        <MantineProvider>
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </MantineProvider>
      </ClientLayout>
    </html>
  );
}
