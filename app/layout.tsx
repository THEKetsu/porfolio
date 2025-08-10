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
  description: "Portfolio de Quentin BENDER, Ingénieur DevSecOps spécialisé en cybersécurité, développement web et automatisation. Expertise en N8n, IA (Claude, ChatGPT) et solutions Cloud.",
  keywords: "DevSecOps, Cybersécurité, Développeur, N8n, Automatisation, IA, Claude, ChatGPT, Portfolio",
  authors: [{ name: "Quentin BENDER" }],
  openGraph: {
    title: "Quentin BENDER - Ingénieur DevSecOps & Cybersécurité",
    description: "Portfolio professionnel - Expertise en DevSecOps, cybersécurité et automatisation",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"  suppressHydrationWarning={true}>
      <head>
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
                "https://github.com/quentinbender"
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
