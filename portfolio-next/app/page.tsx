'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Shivansh Pawar - Full Stack Web Developer | Personal Portfolio</title>
        <meta name="description" content="Shivansh Pawar - Full Stack Web Developer specializing in modern web applications. Turning ideas into digital reality with clean code and exceptional user experiences." />
        <meta name="keywords" content="Shivansh Pawar, Full Stack Web Developer, Frontend, Backend, React, JavaScript, Next js, Node js, tailwindcss, express js, mongo db Portfolio" />
        <meta name="author" content="Shivansh Pawar" />
        <meta property="og:title" content="Shivansh Pawar - Full Stack Web Developer" />
        <meta property="og:description" content="Turning Ideas into Digital Reality. This portfolio showcases my work and skills." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
