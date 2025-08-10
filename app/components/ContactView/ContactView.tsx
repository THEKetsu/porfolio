'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function ContactView() {
    const { t } = useLanguage();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Ajoutez ici la logique d'envoi du formulaire
    };

    return (
        <motion.div 
            className={styles.contactWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={styles.title}>{t('contact.title')}</h1>
                <p className={styles.description}>
                    {t('contact.subtitle')}
                </p>
            </motion.div>

            <div className={styles.scrollableContent}>
                <motion.div 
                    className={styles.contactButtons}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <a href="mailto:bender.quent@outlook.fr" className="btn-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {t('contact.email')}
                    </a>
                    <a href="https://www.linkedin.com/in/quentin-bender-8252241b8" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8C18.1217 8 20.1566 8.84285 21.6569 10.3431C23.1571 11.8434 24 13.8783 24 16V21H19V16C19 15.4696 18.7893 14.9609 18.4142 14.5858C18.0391 14.2107 17.5304 14 17 14C16.4696 14 15.9609 14.2107 15.5858 14.5858C15.2107 14.9609 15 15.4696 15 16V21H10V16C10 13.8783 10.8429 11.8434 12.3431 10.3431C13.8434 8.84285 15.8783 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 9H1V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 6C4.88071 6 6 4.88071 6 3.5C6 2.11929 4.88071 1 3.5 1C2.11929 1 1 2.11929 1 3.5C1 4.88071 2.11929 6 3.5 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {t('contact.linkedin')}
                    </a>
                </motion.div>

                <motion.form 
                    onSubmit={handleSubmit} 
                    className={styles.form}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className={styles.inputGroup}>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder={t('contact.form.name')}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder={t('contact.form.email')}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <textarea 
                            id="message" 
                            placeholder={t('contact.form.message')}
                            rows={3}
                            required
                        />
                    </div>

                    <motion.button 
                        type="submit"
                        className="btn-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {t('contact.form.submit')}
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    );
} 