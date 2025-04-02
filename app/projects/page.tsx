
import React from 'react';
import NavProject from '../components/NavProject/NavProject';
import styles from '../projects/Projects.module.css';

export default function Project(){
    return (
        <div className={styles.container}>
            <p className="text-lg">Here are some of my projects.</p>
            <NavProject />
        </div>
      
    );
}
