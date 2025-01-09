import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title:
    'Sikka Mall of Expressway: Prime Shopping & Entertainment Destination.',
  description:
    'Find all your shopping, dining, and entertainment needs here at Sikka Mall of Expressway. Home to top brands, exciting offers, and the most vibrant of atmospheres; visit now to experience something for yourself!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
