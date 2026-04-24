import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Smart Brain Creations - Creative Learning Blog',
  description: 'Explore articles about education, technology, game development, and creative learning',
  keywords: 'education, technology, creative learning, NEP 2020, edtech',
  authors: [{ name: 'Smart Brain Creations' }],
  creator: 'Smart Brain Creations',
  publisher: 'Smart Brain Creations',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smartbraincreations.com',
    siteName: 'Smart Brain Creations Blog',
    title: 'Smart Brain Creations - Creative Learning Blog',
    description: 'Explore articles about education, technology, game development, and creative learning',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-white font-inter">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
