'use client';
import React from 'react';
import Timeline from '../components/Timeline/Timeline';
import styles from './Career.module.css';

export default function Career() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Career</h1>
            <Timeline />
        </div>
    );
}
