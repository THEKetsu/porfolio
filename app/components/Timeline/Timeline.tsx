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
        title: "Product Owner for Cloud Solutions",
        company: "Thales Cybersecurity Digital & Identity",
        description: "DevSecOps & Product Owner pour des solutions Cloud comme une application de monitoring de chaines de production",
        logo: "/portfolio/thales.svg"
    },
    {
        date: "2023",
        title: "Contrat Pro Développeur Logiciel",
        company: "Thales Cybersecurity Digital & Identity",
        description: "Veille technologique et développement d'applications de monitoring de chaine de production",
        logo: "/portfolio/thales.svg"
    },
    {
        date: "2022",
        title: "Stage développement Logiciel Cybersécurité",
        company: "Thales System Telecommunications & Security", 
        description: "Mise en place d'un logiciel de labellisation de données sensibles dans un environnement sécurisé",
        logo: "/portfolio/thales.svg"
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
