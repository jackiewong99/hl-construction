import './globals.css';
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const dm_sans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'H&L Construction and Development Inc.',
  description:
    'Showcase of projects designed and developed by H&L Construction and Development Inc.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${playfair.variable} ${dm_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
