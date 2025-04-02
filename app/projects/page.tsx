import React from 'react';
import NavProject from '../components/NavProject/NavProject';
import styles from '../projects/Projects.module.css';
import PageTransition from '../components/PageTransition/PageTransition';

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
