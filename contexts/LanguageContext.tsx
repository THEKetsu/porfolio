'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.career': 'Parcours',
        'nav.projects': 'Projets',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Home
        'home.name': 'Quentin BENDER',
        'home.title': 'DevSecOps Engineer',
        'home.description1': 'Junior DevSecOps • Automatisation N8n • IA',
        'home.description2': 'J\'optimise vos workflows et sécurise vos infrastructures.',
        'home.contact': 'Contact me',
        
        // Contact
        'contact.title': 'Démarrons votre projet',
        'contact.subtitle': 'Expert DevSecOps • Automatisation • Développement',
        'contact.email': 'Email direct',
        'contact.linkedin': 'LinkedIn',
        'contact.form.name': 'Nom & Prénom',
        'contact.form.email': 'Email professionnel',
        'contact.form.message': 'Votre projet en quelques mots...',
        'contact.form.submit': 'Envoyer',
        
        // Services
        'services.title': 'Services',
        'services.subtitle': 'Solutions techniques • Résultats rapides',
        'services.audit.title': 'Méthodologie DevSecOps',
        'services.audit.description': 'Application de la méthodologie DevSecOps pour sécuriser vos pipelines et infrastructure',
        'services.audit.feature1': 'Audit sécurité infrastructure',
        'services.audit.feature2': 'Pipelines CI/CD sécurisés',
        'services.audit.feature3': 'Formation & accompagnement équipe',
        'services.audit.duration': '1-2 sem',
        'services.automation.title': 'Automatisation N8n',
        'services.automation.description': 'Création de workflows N8n automatisés et intégration avec l\'IA',
        'services.automation.feature1': 'Workflows N8n personnalisés',
        'services.automation.feature2': 'Intégration IA et APIs',
        'services.automation.feature3': 'Formation à l\'outil N8n',
        'services.automation.duration': '2-4 sem',
        'services.consulting.title': 'Conseil Technique',
        'services.consulting.description': 'Conseil en architecture technique et stratégie DevSecOps',
        'services.consulting.feature1': 'Analyse des besoins',
        'services.consulting.feature2': 'Roadmap technique',
        'services.consulting.feature3': 'Accompagnement projet',
        'services.consulting.duration': 'Flexible',
        
        // Timeline
        'timeline.expert.title': 'Ingénieur DevSecOps',
        'timeline.expert.company': 'Thales',
        'timeline.expert.description': 'DevSecOps, sécurisation infrastructure, automatisation CI/CD',
        'timeline.po.title': 'Product Owner Cloud',
        'timeline.po.company': 'Thales',
        'timeline.po.description': 'DevSecOps & PO solutions Cloud monitoring production',
        'timeline.dev.title': 'Développeur DevSecOps',
        'timeline.dev.company': 'Thales',
        'timeline.dev.description': 'Applications monitoring, veille technologique',
        'timeline.stage.title': 'Stage Cybersécurité',
        'timeline.stage.company': 'Thales',
        'timeline.stage.description': 'Labellisation données sensibles, environnement sécurisé',

        // Footer
        'footer.about.title': 'À propos',
        'footer.about.bio': 'Ingénieur DevSecOps passionné par la sécurité, l\'automatisation et l\'IA. Expertise en N8n, solutions Cloud et monitoring.',
        'footer.about.company': 'Thales Cybersecurity',
        'footer.links.title': 'Navigation',
        'footer.links.home': 'Accueil',
        'footer.links.career': 'Parcours',
        'footer.links.projects': 'Projets',
        'footer.links.services': 'Services',
        'footer.links.contact': 'Contact',
        'footer.contact.title': 'Contact',
        'footer.contact.email': 'Email',
        'footer.contact.linkedin': 'LinkedIn',
        'footer.contact.github': 'GitHub',
        'footer.copyright': '© {year} Quentin BENDER. Tous droits réservés.',
        'footer.availability': 'Disponible pour des collaborations'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.career': 'Career',
        'nav.projects': 'Projects',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Home
        'home.name': 'Quentin BENDER',
        'home.title': 'DevSecOps Engineer',
        'home.description1': 'Junior DevSecOps • N8n Automation • AI',
        'home.description2': 'I optimize your workflows and secure your infrastructure.',
        'home.contact': 'Contact me',
        
        // Contact
        'contact.title': 'Let\'s start your project',
        'contact.subtitle': 'DevSecOps Expert • Automation • Development',
        'contact.email': 'Direct email',
        'contact.linkedin': 'LinkedIn',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Professional email',
        'contact.form.message': 'Your project in a few words...',
        'contact.form.submit': 'Send',
        
        // Services
        'services.title': 'Services',
        'services.subtitle': 'Technical solutions • Fast results',
        'services.audit.title': 'DevSecOps Methodology',
        'services.audit.description': 'Applying DevSecOps methodology to secure your pipelines and infrastructure',
        'services.audit.feature1': 'Infrastructure security audit',
        'services.audit.feature2': 'Secure CI/CD pipelines',
        'services.audit.feature3': 'Team training & support',
        'services.audit.duration': '1-2 weeks',
        'services.automation.title': 'N8n Automation',
        'services.automation.description': 'Building automated N8n workflows with AI integration',
        'services.automation.feature1': 'Custom N8n workflows',
        'services.automation.feature2': 'AI & API integration',
        'services.automation.feature3': 'N8n tool training',
        'services.automation.duration': '2-4 weeks',
        'services.consulting.title': 'Technical Consulting',
        'services.consulting.description': 'Technical architecture consulting and DevSecOps strategy',
        'services.consulting.feature1': 'Needs analysis',
        'services.consulting.feature2': 'Technical roadmap',
        'services.consulting.feature3': 'Project support',
        'services.consulting.duration': 'Flexible',
        
        // Timeline
        'timeline.expert.title': 'DevSecOps Engineer',
        'timeline.expert.company': 'Thales',
        'timeline.expert.description': 'DevSecOps, infrastructure security, CI/CD automation',
        'timeline.po.title': 'Cloud Product Owner',
        'timeline.po.company': 'Thales',
        'timeline.po.description': 'DevSecOps & PO for Cloud production monitoring solutions',
        'timeline.dev.title': 'DevSecOps Developer',
        'timeline.dev.company': 'Thales',
        'timeline.dev.description': 'Monitoring applications, technology watch',
        'timeline.stage.title': 'Cybersecurity Intern',
        'timeline.stage.company': 'Thales',
        'timeline.stage.description': 'Sensitive data labeling, secure environment',

        // Footer
        'footer.about.title': 'About',
        'footer.about.bio': 'DevSecOps Engineer passionate about security, automation and AI. Expertise in N8n, Cloud solutions and monitoring.',
        'footer.about.company': 'Thales Cybersecurity',
        'footer.links.title': 'Quick Links',
        'footer.links.home': 'Home',
        'footer.links.career': 'Career',
        'footer.links.projects': 'Projects',
        'footer.links.services': 'Services',
        'footer.links.contact': 'Contact',
        'footer.contact.title': 'Get in Touch',
        'footer.contact.email': 'Email',
        'footer.contact.linkedin': 'LinkedIn',
        'footer.contact.github': 'GitHub',
        'footer.copyright': '© {year} Quentin BENDER. All rights reserved.',
        'footer.availability': 'Available for collaborations'
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('fr');

    useEffect(() => {
        // Vérifier si on est côté client (hydratation)
        if (typeof window === 'undefined') return;
        
        const savedLanguage = localStorage.getItem('language') as Language;
        
        if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
            // Si l'utilisateur a déjà choisi une langue, l'utiliser
            setLanguage(savedLanguage);
        } else {
            // Sinon, détecter la langue du navigateur
            const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
            const detectedLanguage = browserLanguage.toLowerCase().startsWith('fr') ? 'fr' : 'en';
            setLanguage(detectedLanguage);
            localStorage.setItem('language', detectedLanguage);
            
            // Log pour debug (optionnel)
            console.log(`🌐 Langue détectée: ${browserLanguage} → ${detectedLanguage}`);
        }
    }, []);

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}