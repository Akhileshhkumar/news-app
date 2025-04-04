import { Outfit } from 'next/font/google';
import '@/app/globals.css'; // Ensure the correct path

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'News App',
  description: 'Stay updated with the latest news',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
