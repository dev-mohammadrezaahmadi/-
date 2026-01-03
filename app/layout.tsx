import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Mohammad Reza Ahmadi - Portfolio',
  description: 'Personal portfolio website showcasing my work and experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
