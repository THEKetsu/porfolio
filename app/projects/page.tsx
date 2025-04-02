
import React from 'react';
import SwipeCard from '../components/SwipeCards/SwipeCards';
import styles from '../projects/Projects.module.css';

export default function Project(){
    return (
        <div className={styles.container}>
            <p className="text-lg">Here are some of my projects.</p>
            <SwipeCard/>
        </div>
      
    );
}
