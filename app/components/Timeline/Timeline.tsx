'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Timeline.module.css';
import { useLanguage } from '../../../contexts/LanguageContext';

interface TimelineEvent {
    date: string;
    titleKey: string;
    companyKey: string;
    descriptionKey: string;
    logo: string;
}

const timelineEvents: TimelineEvent[] = [
    {
        date: "2024-2025",
        titleKey: 'timeline.expert.title',
        companyKey: 'timeline.expert.company',
        descriptionKey: 'timeline.expert.description',
        logo: "/portfolio/thales.svg"
    },
    {
        date: "2024",
        titleKey: 'timeline.po.title',
        companyKey: 'timeline.po.company',
        descriptionKey: 'timeline.po.description',
        logo: "/portfolio/thales.svg"
    },
    {
        date: "2023",
        titleKey: 'timeline.dev.title',
        companyKey: 'timeline.dev.company',
        descriptionKey: 'timeline.dev.description',
        logo: "/portfolio/thales.svg"
    },
    {
        date: "2022",
        titleKey: 'timeline.stage.title',
        companyKey: 'timeline.stage.company',
        descriptionKey: 'timeline.stage.description',
        logo: "/portfolio/thales.svg"
    },
];

export default function Timeline() {
    const { t } = useLanguage();
    
    return (
        <div className={styles.timelineWrapper}>
            <motion.div 
                className={styles.timeline}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div className={styles.eventsContainer}>
                    {timelineEvents.map((event, index) => (
                        <div key={index} className={styles.eventPoint}>
                            <span className={styles.timelineDate}>{event.date}</span>
                            <motion.div 
                                className={styles.timelineDot}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.5 + 1.2, duration: 0.3 }}
                            />
                            <div className={styles.eventPopup}>
                                <div className={styles.eventHeader}>
                                    <Image 
                                        src={event.logo} 
                                        alt={event.company} 
                                        width={48}
                                        height={48}
                                        className={styles.companyLogo}
                                    />
                                    <div className={styles.headerText}>
                                        <h3>{t(event.titleKey)}</h3>
                                        <span className={styles.date}>{event.date}</span>
                                    </div>
                                </div>
                                <span className={styles.company}>{t(event.companyKey)}</span>
                                <p className={styles.description}>{t(event.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
} 
