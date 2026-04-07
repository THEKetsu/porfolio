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
        'home.title': 'Ingénieur DevSecOps',
        'home.description1': 'DevSecOps @ Thales • Automatisation CI/CD • Solutions IA',
        'home.description2': 'J\'optimise vos pipelines, sécurise vos infrastructures et intègre l\'IA dans vos workflows.',
        'home.contact': 'Me contacter',
        
        // Contact
        'contact.title': 'Restons en contact',
        'contact.subtitle': 'Ingénieur DevSecOps • Automatisation CI/CD • Solutions IA',
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
        'timeline.cdi.title': 'Ingénieur DevSecOps (CDI)',
        'timeline.cdi.company': 'Thales Cybersecurity Digital & Identity - Gémenos',
        'timeline.cdi.description': 'Pilotage de l\'adoption DevSecOps au sein du Product Engineering. Exploration et évaluation d\'outils IA (assistants de code, chatbots, solutions RAG). Réduction des délais de livraison et amélioration de la qualité des livrables. Technologies: Python, GitLab CI, Datadog, Azure, Ansible, K8s',
        'timeline.po.title': 'Product Owner for Cloud Solutions (CDD)',
        'timeline.po.company': 'Thales - Gémenos',
        'timeline.po.description': 'Introduction de pratiques DevSecOps modernes (Pipeline, Containerisation). Mise à profit d\'outils IA (RAG, Chatbot, Code Assistant) pour la documentation. Gestion d\'une solution d\'observabilité déployée sur 28 sites. Technologies: Python, GitLab, Datadog, Azure, Docker, MQTT, Ansible',
        'timeline.apprenti.title': 'Apprenti Développement Logiciel (Alternance)',
        'timeline.apprenti.company': 'Thales Digital Identity & Security - Gémenos',
        'timeline.apprenti.description': 'Analyse comparative des courtiers MQTT et TSDB pour une solution d\'observabilité. Déploiement d\'un outil de surveillance en temps réel. Technologies: MQTT, Python, Datadog, TSDB, Docker, Ansible',
        'timeline.stage.title': 'Ingénieur de développement en cybersécurité (Stage)',
        'timeline.stage.company': 'Thales SIX CDS & ThereSIS - Palaiseau',
        'timeline.stage.description': 'Développement d\'un système d\'étiquetage des données (Data-Centric Security conforme STANAG). Intégration de technologies de signature numérique avancées. Technologies: Rust, PKCS11, GitLab, Windows, GUI',

        // Footer
        'footer.about.title': 'À propos',
        'footer.about.bio': 'Ingénieur DevSecOps chez Thales, passionné par l\'automatisation CI/CD, la sécurité et l\'IA. Expert en solutions d\'observabilité et intégration de technologies RAG.',
        'footer.about.company': 'Thales Cybersecurity Digital & Identity',
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
        'footer.availability': 'Ingénieur DevSecOps @ Thales'
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
        'home.description1': 'DevSecOps @ Thales • CI/CD Automation • AI Solutions',
        'home.description2': 'I optimize pipelines, secure infrastructures, and integrate AI into workflows.',
        'home.contact': 'Contact me',
        
        // Contact
        'contact.title': 'Let\'s stay in touch',
        'contact.subtitle': 'DevSecOps Engineer • CI/CD Automation • AI Solutions',
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
        'timeline.cdi.title': 'DevSecOps Engineer (Permanent)',
        'timeline.cdi.company': 'Thales Cybersecurity Digital & Identity - Gémenos',
        'timeline.cdi.description': 'Leading DevSecOps adoption within Product Engineering. Exploring and evaluating AI tools (code assistants, chatbots, RAG solutions). Reducing delivery times and improving deliverable quality. Technologies: Python, GitLab CI, Datadog, Azure, Ansible, K8s',
        'timeline.po.title': 'Product Owner for Cloud Solutions (Fixed-term)',
        'timeline.po.company': 'Thales - Gémenos',
        'timeline.po.description': 'Introducing modern DevSecOps practices (Pipeline, Containerization). Leveraging AI-powered tools (RAG, Chatbot, Code Assistant) for documentation. Managing observability solution deployed across 28 sites. Technologies: Python, GitLab, Datadog, Azure, Docker, MQTT, Ansible',
        'timeline.apprenti.title': 'Software Development Apprentice (Work-Study)',
        'timeline.apprenti.company': 'Thales Digital Identity & Security - Gémenos',
        'timeline.apprenti.description': 'Comparative analysis of MQTT brokers and TSDB for observability solution. Deploying real-time monitoring tools. Technologies: MQTT, Python, Datadog, TSDB, Docker, Ansible',
        'timeline.stage.title': 'Cybersecurity Development Engineer (Internship)',
        'timeline.stage.company': 'Thales SIX CDS & ThereSIS - Palaiseau',
        'timeline.stage.description': 'Developing data labeling system (STANAG-compliant Data-Centric Security). Integrating advanced digital signature technologies. Technologies: Rust, PKCS11, GitLab, Windows, GUI',

        // Footer
        'footer.about.title': 'About',
        'footer.about.bio': 'DevSecOps Engineer at Thales, passionate about CI/CD automation, security and AI. Expert in observability solutions and RAG technology integration.',
        'footer.about.company': 'Thales Cybersecurity Digital & Identity',
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
        'footer.availability': 'DevSecOps Engineer @ Thales'
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