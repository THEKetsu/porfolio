import ContactView from '../components/ContactView/ContactView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Quentin BENDER, Ingénieur DevSecOps chez Thales. Expert en automatisation CI/CD, observabilité et solutions IA.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - Quentin BENDER",
    description: "Ingénieur DevSecOps @ Thales - Expert en automatisation CI/CD et solutions IA.",
    url: "https://quentinbender.github.io/porfolio/contact",
    type: "website",
  },
};

export default function ContactPage() {
    return <ContactView />;
}