'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Timeline.module.css';

interface TimelineEvent {
    date: string;
    title: string;
    company: string;
    description: string;
    logo: string;
}

const timelineEvents: TimelineEvent[] = [
    {
        date: "2024",
        title: "Développeur Full Stack",
        company: "Mindflow",
        description: "Développement d'applications web avec Next.js et Node.js",
        logo: "/companies/mindflow.svg"
    },
    {
        date: "2023",
        title: "Développeur Full Stack",
        company: "Marine Nationale",
        description: "Développement d'applications de cybersécurité",
        logo: "/companies/marine.svg"
    },
    {
        date: "2022",
        title: "Développeur Full Stack",
        company: "RCT",
        description: "Développement d'une application de stratégie sportive",
        logo: "/companies/rct.svg"
    },
];

export default function Timeline() {
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
                                        <h3>{event.title}</h3>
                                        <span className={styles.date}>{event.date}</span>
                                    </div>
                                </div>
                                <span className={styles.company}>{event.company}</span>
                                <p className={styles.description}>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
} 
