import React from 'react';
import CareerClient from './CareerClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Parcours Professionnel - Quentin BENDER",
  description: "Découvrez mon parcours professionnel en DevSecOps et cybersécurité chez Thales. Expériences en développement, Product Owner et solutions Cloud.",
};

export default function Career() {
    return <CareerClient />;
}
