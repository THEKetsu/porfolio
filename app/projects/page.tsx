import React from 'react';
import NavProject from '../components/NavProject/NavProject';
import styles from '../projects/Projects.module.css';
import PageTransition from '../components/PageTransition/PageTransition';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mes Projets",
  description: "Découvrez mes projets en développement web, cybersécurité, automatisation avec N8n et solutions IA. Portfolio de réalisations techniques.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Mes Projets - Quentin BENDER",
    description: "Découvrez mes projets en développement web, cybersécurité, automatisation avec N8n et solutions IA.",
    url: "https://quentinbender.github.io/porfolio/projects",
    type: "website",
  },
};

export default function Project(){
    return (
        <PageTransition>
            <div className={styles.container}>
                <NavProject />
            </div>
        </PageTransition>
    );
}
