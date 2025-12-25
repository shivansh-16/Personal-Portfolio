

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import JsonLd from "./json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shivansh-pawar.vercel.app'), // TODO: Update to actual domain
  title: {
    default: "Shivansh Pawar - Full Stack Web Developer",
    template: "%s | Shivansh Pawar",
  },
  description: "Shivansh Pawar - Full Stack Web Developer specializing in modern web applications. Turning ideas into digital reality with clean code and exceptional user experiences.",
  keywords: ["Shivansh Pawar", "Full Stack Web Developer", "Frontend", "Backend", "React", "JavaScript", "Next.js", "Node.js", "TailwindCSS", "Express.js", "MongoDB", "Portfolio", "Web Development"],
  authors: [{ name: "Shivansh Pawar" }],
  creator: "Shivansh Pawar",
  publisher: "Shivansh Pawar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivansh-pawar.vercel.app",
    title: "Shivansh Pawar - Full Stack Web Developer",
    description: "Turning Ideas into Digital Reality. This portfolio showcases my work and skills.",
    siteName: "Shivansh Pawar Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure you have this image in public folder
        width: 1200,
        height: 630,
        alt: "Shivansh Pawar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Pawar - Full Stack Web Developer",
    description: "Turning Ideas into Digital Reality. This portfolio showcases my work and skills.",
    creator: "@ShivanshPawar", // Update if you have a twitter handle
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg', // Verify this path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
