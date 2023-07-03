import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Head>
        <title>David&apos;s portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </main>
  );
}
