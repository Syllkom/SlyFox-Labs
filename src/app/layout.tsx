
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SlyFox Labs',
  description: 'Recursos para Desarrolladores Frontend y Diseñadores por SlyFox Labs',
  icons: {
    icon: '/images/icon.ico',
  },
  openGraph: {
    title: 'SlyFox Labs | Syllkom ',
    description: 'Slyfox Labs Frontend Developers',
    images: [
      {
        url: 'https://sly-fox-labs.vercel.app//images/preview.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto_mono.variable} antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="slyfox-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
