import React from 'react';
import NavProject from '../components/NavProject/NavProject';
import styles from '../projects/Projects.module.css';
import PageTransition from '../components/PageTransition/PageTransition';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mes Projets - Quentin BENDER",
  description: "Découvrez mes projets en développement web, cybersécurité, automatisation avec N8n et solutions IA. Portfolio de réalisations techniques.",
};

export default function Project(){
    return (
        <PageTransition>
            <div className={styles.container}>
                <p className="text-lg">Here are some of my projects.</p>
                <NavProject />
            </div>
        </PageTransition>
    );
}
