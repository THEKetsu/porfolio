'use client';
import { useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function LanguageDetector() {
    const { language } = useLanguage();

    useEffect(() => {
        // Mettre à jour l'attribut lang du HTML
        if (typeof document !== 'undefined') {
            document.documentElement.lang = language;
        }
    }, [language]);

    return null; // Ce composant n'affiche rien
}