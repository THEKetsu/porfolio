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
        'services.audit.title': 'Audit DevSecOps',
        'services.audit.description': 'Sécurisation infrastructure • Pipelines CI/CD',
        'services.audit.feature1': 'Audit sécurité',
        'services.audit.feature2': 'CI/CD sécurisé',
        'services.audit.feature3': 'Formation équipe',
        'services.audit.duration': '1-2 sem',
        'services.automation.title': 'Automatisation N8n',
        'services.automation.description': 'Workflows automatisés • Intégration IA',
        'services.automation.feature1': 'Workflows N8n',
        'services.automation.feature2': 'Intégration IA',
        'services.automation.feature3': 'Formation',
        'services.automation.duration': '2-4 sem',
        'services.consulting.title': 'Conseil Technique',
        'services.consulting.description': 'Architecture • Stratégie tech',
        'services.consulting.feature1': 'Analyse besoins',
        'services.consulting.feature2': 'Roadmap tech',
        'services.consulting.feature3': 'Accompagnement',
        'services.consulting.duration': 'Flexible',
        
        // Timeline
        'timeline.expert.title': 'Expert Automatisation & IA',
        'timeline.expert.company': 'Freelance',
        'timeline.expert.description': 'Spécialisation N8n, IA (Claude/ChatGPT), optimisation workflows entreprise',
        'timeline.po.title': 'Product Owner Cloud',
        'timeline.po.company': 'Thales',
        'timeline.po.description': 'DevSecOps & PO solutions Cloud monitoring production',
        'timeline.dev.title': 'Développeur DevSecOps',
        'timeline.dev.company': 'Thales',
        'timeline.dev.description': 'Applications monitoring, veille technologique',
        'timeline.stage.title': 'Stage Cybersécurité',
        'timeline.stage.company': 'Thales',
        'timeline.stage.description': 'Labellisation données sensibles, environnement sécurisé'
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
        'services.audit.title': 'DevSecOps Audit',
        'services.audit.description': 'Infrastructure security • CI/CD Pipelines',
        'services.audit.feature1': 'Security audit',
        'services.audit.feature2': 'Secure CI/CD',
        'services.audit.feature3': 'Team training',
        'services.audit.duration': '1-2 weeks',
        'services.automation.title': 'N8n Automation',
        'services.automation.description': 'Automated workflows • AI Integration',
        'services.automation.feature1': 'N8n workflows',
        'services.automation.feature2': 'AI integration',
        'services.automation.feature3': 'Training',
        'services.automation.duration': '2-4 weeks',
        'services.consulting.title': 'Technical Consulting',
        'services.consulting.description': 'Architecture • Tech strategy',
        'services.consulting.feature1': 'Needs analysis',
        'services.consulting.feature2': 'Tech roadmap',
        'services.consulting.feature3': 'Support',
        'services.consulting.duration': 'Flexible',
        
        // Timeline
        'timeline.expert.title': 'Automation & AI Expert',
        'timeline.expert.company': 'Freelance',
        'timeline.expert.description': 'N8n specialization, AI (Claude/ChatGPT), enterprise workflow optimization',
        'timeline.po.title': 'Cloud Product Owner',
        'timeline.po.company': 'Thales',
        'timeline.po.description': 'DevSecOps & PO for Cloud production monitoring solutions',
        'timeline.dev.title': 'DevSecOps Developer',
        'timeline.dev.company': 'Thales',
        'timeline.dev.description': 'Monitoring applications, technology watch',
        'timeline.stage.title': 'Cybersecurity Intern',
        'timeline.stage.company': 'Thales',
        'timeline.stage.description': 'Sensitive data labeling, secure environment'
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