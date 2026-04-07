import React from 'react';
import CareerClient from './CareerClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Parcours Professionnel",
  description: "Parcours professionnel en DevSecOps et cybersécurité chez Thales : CDI Ingénieur DevSecOps, Product Owner Cloud, alternance et stage en développement sécurisé. Expertise Python, GitLab CI, K8s, Azure.",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Parcours Professionnel - Quentin BENDER",
    description: "Ingénieur DevSecOps chez Thales avec expertise en automatisation, IA et observabilité.",
    url: "https://quentinbender.github.io/porfolio/career",
    type: "profile",
  },
};

export default function Career() {
    return <CareerClient />;
}
