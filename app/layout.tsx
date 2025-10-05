import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "../contexts/LanguageContext";
import LanguageDetector from "./components/LanguageDetector/LanguageDetector";
import FloatingLanguageToggle from "./components/FloatingLanguageToggle/FloatingLanguageToggle";

export const metadata: Metadata = {
  title: "Quentin BENDER - Ingénieur DevSecOps & Cybersécurité",
  description: "Portfolio professionnel de Quentin BENDER, Ingénieur DevSecOps spécialisé en cybersécurité, développement web et automatisation. Expertise N8n, IA (Claude, ChatGPT), solutions Cloud. Consultant freelance disponible.",
  keywords: "DevSecOps, Cybersécurité, Développeur, N8n, Automatisation, IA, Claude, ChatGPT, Portfolio, Consultant, Freelance, Audit sécurité",
  authors: [{ name: "Quentin BENDER" }],
  creator: "Quentin BENDER",
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
  openGraph: {
    title: "Quentin BENDER - Ingénieur DevSecOps & Cybersécurité",
    description: "Expert DevSecOps freelance - Audit sécurité, automatisation N8n, solutions IA. Consultant technique disponible pour vos projets.",
    url: "https://quentinbender.github.io/porfolio",
    siteName: "Quentin BENDER Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/32210803?v=4",
        width: 500,
        height: 500,
        alt: "Quentin BENDER",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quentin BENDER - Ingénieur DevSecOps",
    description: "Portfolio professionnel - DevSecOps & Cybersécurité",
    images: ["https://avatars.githubusercontent.com/u/32210803?v=4"],
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"  suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://quentinbender.github.io/porfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Quentin BENDER",
              "jobTitle": "Ingénieur DevSecOps",
              "description": "Ingénieur DevSecOps spécialisé en cybersécurité, développement web et automatisation",
              "url": "https://quentinbender.github.io/porfolio",
              "image": "https://avatars.githubusercontent.com/u/32210803?v=4",
              "sameAs": [
                "https://github.com/quentinbender",
                "https://www.linkedin.com/in/quentin-bender-8252241b8"
              ],
              "knowsAbout": [
                "DevSecOps",
                "Cybersécurité",
                "Développement Web",
                "N8n",
                "Automatisation",
                "Intelligence Artificielle",
                "Claude AI",
                "ChatGPT",
                "Solutions Cloud"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Thales Cybersecurity Digital & Identity"
              }
            })
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <LanguageDetector />
          <FloatingLanguageToggle />
          <div className="container">
            <AnimatePresence mode="wait" initial={false}>
              {children}
            </AnimatePresence>
          </div>
          <Navbar />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
