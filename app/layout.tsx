import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "../contexts/LanguageContext";
import LanguageDetector from "./components/LanguageDetector/LanguageDetector";
import FloatingLanguageToggle from "./components/FloatingLanguageToggle/FloatingLanguageToggle";

export const metadata: Metadata = {
  metadataBase: new URL('https://quentinbender.github.io/porfolio'),
  title: {
    default: "Quentin BENDER - Ingénieur DevSecOps & Cybersécurité",
    template: "%s | Quentin BENDER"
  },
  description: "Portfolio professionnel de Quentin BENDER, Ingénieur DevSecOps chez Thales. Spécialiste en cybersécurité, automatisation CI/CD, solutions IA (RAG, chatbots) et observabilité. Expert Python, GitLab CI, Kubernetes, Azure, Ansible.",
  keywords: "DevSecOps, Cybersécurité, Thales, Python, GitLab CI, Kubernetes, Azure, Ansible, IA, RAG, Chatbot, MQTT, Datadog, Automatisation, Pipeline CI/CD, Observabilité",
  authors: [{ name: "Quentin BENDER" }],
  creator: "Quentin BENDER",
  alternates: {
    canonical: "/",
    languages: {
      'fr-FR': '/',
      'en-US': '/',
    },
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
  openGraph: {
    title: "Quentin BENDER - Ingénieur DevSecOps & Cybersécurité",
    description: "Ingénieur DevSecOps chez Thales - Expert en automatisation CI/CD, solutions IA (RAG, chatbots) et observabilité Cloud.",
    url: "https://quentinbender.github.io/porfolio",
    siteName: "Quentin BENDER Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/32210803?v=4",
        width: 500,
        height: 500,
        alt: "Quentin BENDER - DevSecOps Engineer",
      },
    ],
    locale: "fr_FR",
    alternateLocale: ["en_US"],
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
        <link rel="manifest" href="/porfolio/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
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
              "email": "mailto:quentin.bender@outlook.fr",
              "sameAs": [
                "https://github.com/quentinbender",
                "https://www.linkedin.com/in/quentin-bender-8252241b8"
              ],
              "knowsAbout": [
                "DevSecOps",
                "Cybersécurité",
                "Python",
                "GitLab CI/CD",
                "Kubernetes",
                "Azure",
                "Ansible",
                "Docker",
                "Automatisation",
                "Intelligence Artificielle",
                "RAG (Retrieval-Augmented Generation)",
                "Chatbots",
                "Code Assistants",
                "Datadog",
                "MQTT",
                "Observabilité",
                "TSDB"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Thales Cybersecurity Digital & Identity"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Quentin BENDER Portfolio",
              "url": "https://quentinbender.github.io/porfolio",
              "description": "Portfolio professionnel de Quentin BENDER, Ingénieur DevSecOps",
              "inLanguage": ["fr-FR", "en-US"],
              "author": {
                "@type": "Person",
                "name": "Quentin BENDER"
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
