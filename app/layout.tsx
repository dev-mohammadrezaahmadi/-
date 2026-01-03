import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio website showcasing my work and experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

