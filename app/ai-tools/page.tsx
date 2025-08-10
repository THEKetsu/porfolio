import React from 'react';
import Services from '../components/Services/Services';
import PageTransition from '../components/PageTransition/PageTransition';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services & Tarifs - Quentin BENDER",
  description: "Services de consultation en DevSecOps, cybersécurité, automatisation et développement. Tarifs freelance pour accompagner vos projets techniques.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: '1rem' }}>
        <Services />
      </div>
    </PageTransition>
  );
}