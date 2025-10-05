'use client';
import React from 'react';
import Timeline from '../components/Timeline/Timeline';
import styles from './Career.module.css';
import PageTransition from '../components/PageTransition/PageTransition';
import { useLanguage } from '../../contexts/LanguageContext';

export default function CareerClient() {
    const { t } = useLanguage();

    return (
        <PageTransition>
            <div className={styles.container}>
                <h1 className={styles.title}>{t('nav.career')}</h1>
                <Timeline />
            </div>
        </PageTransition>
    );
}