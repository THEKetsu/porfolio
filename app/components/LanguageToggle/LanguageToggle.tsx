'use client';
import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.languageToggle}>
            <button 
                className={`${styles.langButton} ${language === 'fr' ? styles.active : ''}`}
                onClick={() => setLanguage('fr')}
            >
                FR
            </button>
            <button 
                className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
        </div>
    );
}