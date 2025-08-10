'use client';
import React from 'react';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import styles from './FloatingLanguageToggle.module.css';

export default function FloatingLanguageToggle() {
    return (
        <div className={styles.floatingToggle}>
            <LanguageToggle />
        </div>
    );
}