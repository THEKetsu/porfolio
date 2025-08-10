import ContactView from '../components/ContactView/ContactView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Quentin BENDER",
  description: "Contactez-moi pour vos projets DevSecOps, cybersécurité ou automatisation. Ingénieur disponible pour collaborations et opportunités professionnelles.",
};

export default function ContactPage() {
    return <ContactView />;
}