'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function ContactView() {
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
            <h1 className={styles.title}>Contact me</h1>
            <p className={styles.description}>
                Feel free to reach out to me for any questions or opportunities.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        placeholder="Enter your message"
                        rows={6}
                        required
                    />
                </div>

                <motion.button 
                    type="submit"
                    className={styles.submitButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Submit →
                </motion.button>
            </form>
        </motion.div>
    );
} 