'use client';
import React from 'react';
import styles from './AIUsage.module.css';

interface AITool {
  name: string;
  description: string;
  usageStats: {
    sessionsPerWeek: number;
    averageSessionDuration: string;
    primaryUseCases: string[];
    lastUsed: string;
  };
  logo: string;
}

const aiTools: AITool[] = [
  {
    name: "Claude",
    description: "Assistant IA pour le développement, l'analyse de code et la documentation",
    usageStats: {
      sessionsPerWeek: 15,
      averageSessionDuration: "45 min",
      primaryUseCases: ["Développement", "Code Review", "Documentation", "Debugging"],
      lastUsed: "Aujourd'hui"
    },
    logo: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FF6B35"/>
      <circle cx="9" cy="9" r="1" fill="#333"/>
      <circle cx="15" cy="9" r="1" fill="#333"/>
      <path d="M8 13c0 2 1.79 3 4 3s4-1 4-3" stroke="#333" stroke-width="1" fill="none"/>
    </svg>`
  },
  {
    name: "ChatGPT",
    description: "Assistance pour la résolution de problèmes et brainstorming",
    usageStats: {
      sessionsPerWeek: 8,
      averageSessionDuration: "25 min",
      primaryUseCases: ["Recherche", "Brainstorming", "Rédaction", "Apprentissage"],
      lastUsed: "Hier"
    },
    logo: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.28 12c0-.83-.14-1.64-.4-2.4-.25-.75-.62-1.45-1.1-2.06-.48-.62-1.06-1.15-1.72-1.58-.66-.43-1.38-.75-2.16-.95-.77-.2-1.58-.3-2.4-.3-.83 0-1.64.1-2.4.3-.78.2-1.5.52-2.16.95-.66.43-1.24.96-1.72 1.58-.48.61-.85 1.31-1.1 2.06-.26.76-.4 1.57-.4 2.4 0 .83.14 1.64.4 2.4.25.75.62 1.45 1.1 2.06.48.62 1.06 1.15 1.72 1.58.66.43 1.38.75 2.16.95.76.2 1.57.3 2.4.3.82 0 1.63-.1 2.4-.3.78-.2 1.5-.52 2.16-.95.66-.43 1.24-.96 1.72-1.58.48-.61.85-1.31 1.1-2.06.26-.76.4-1.57.4-2.4z" fill="#10A37F"/>
      <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="white"/>
    </svg>`
  },
  {
    name: "N8n",
    description: "Plateforme d'automatisation low-code pour les workflows",
    usageStats: {
      sessionsPerWeek: 5,
      averageSessionDuration: "60 min",
      primaryUseCases: ["Automatisation", "Intégrations", "Monitoring", "Data Processing"],
      lastUsed: "Il y a 2 jours"
    },
    logo: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16-.74 9-3.45 9-9V7l-10-5z" fill="#EA4B71"/>
      <path d="M12 4l-6 3v8c0 3.31 2.69 6 6 6s6-2.69 6-6V7l-6-3z" fill="#FF6B9D"/>
      <path d="M8 10l4-2 4 2v6l-4 2-4-2v-6z" fill="white"/>
      <circle cx="10" cy="12" r="1" fill="#EA4B71"/>
      <circle cx="14" cy="12" r="1" fill="#EA4B71"/>
    </svg>`
  }
];

export default function AIUsage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Outils IA & Automatisation</h2>
      <p className={styles.subtitle}>Analyse de mes usages quotidiens</p>
      
      <div className={styles.toolsGrid}>
        {aiTools.map((tool, index) => (
          <div key={index} className={styles.toolCard}>
            <div className={styles.toolHeader}>
              <div className={styles.logo} dangerouslySetInnerHTML={{ __html: tool.logo }} />
              <h3 className={styles.toolName}>{tool.name}</h3>
            </div>
            
            <p className={styles.description}>{tool.description}</p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Sessions/semaine:</span>
                <span className={styles.statValue}>{tool.usageStats.sessionsPerWeek}</span>
              </div>
              
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Durée moyenne:</span>
                <span className={styles.statValue}>{tool.usageStats.averageSessionDuration}</span>
              </div>
              
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Dernière utilisation:</span>
                <span className={styles.statValue}>{tool.usageStats.lastUsed}</span>
              </div>
            </div>
            
            <div className={styles.useCases}>
              <h4 className={styles.useCasesTitle}>Cas d&apos;usage principaux:</h4>
              <div className={styles.tags}>
                {tool.usageStats.primaryUseCases.map((useCase, i) => (
                  <span key={i} className={styles.tag}>{useCase}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}