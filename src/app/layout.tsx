import type { Metadata } from 'next';
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PRYNEX — AI & Quant Driven Market Intelligence',
  description: 'Algo trading tools • Quant research • Market-grade analytics. Premium algorithmic trading, research & SaaS platform for retail and institutional traders.',
  keywords: 'algorithmic trading, quant research, market analytics, algo bots, trading signals, backtester, market screener, AI trading',
  authors: [{ name: 'Priyanshu Shukla', url: 'https://prynex.com' }],
  creator: 'PRYNEX',
  publisher: 'PRYNEX',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prynex.com',
    title: 'PRYNEX — AI & Quant Driven Market Intelligence',
    description: 'Algo trading tools • Quant research • Market-grade analytics',
    siteName: 'PRYNEX',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'PRYNEX - AI & Quant Trading Platform',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRYNEX — AI & Quant Driven Market Intelligence',
    description: 'Algo trading tools • Quant research • Market-grade analytics',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans scrollbar-custom">
        <div className="noise-overlay min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
