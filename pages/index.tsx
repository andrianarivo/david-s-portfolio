import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0`}
    >
      <Head>
        <title>David&apos;s portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      {/* Experience */}
      <section id="experience">
        <WorkExperience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </main>
  );
}
