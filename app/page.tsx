'use client';
import styles from './Home.module.css';
import Image from 'next/image';
import PageTransition from './components/PageTransition/PageTransition';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <PageTransition>
      <div className={styles.container}>
        {/* Name + Title(job) + Description + Contact Button*/}
        <div className={styles.left}>
          <div className={styles.header}>
            <h1 className={styles.name}>{t('home.name')}</h1> 
            <h2 className={styles.title}>{t('home.title')}</h2>
          </div>
          <div className={styles.middle}>
              <p className={styles.description}>
                {t('home.description1')}
              </p>
              <p className={styles.description}>
                {t('home.description2')}
              </p>
          </div>
        <button className="btn-primary">{t('home.contact')}</button>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.image}
            src="https://avatars.githubusercontent.com/u/32210803?v=4"
            alt="Quentin BENDER"
            width={500}
            height={500}
          />
        </div>
      </div>
    </PageTransition>
  );
}
