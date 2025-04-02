import styles from './Career.module.css';
import Image from 'next/image';

export default function Career() {
    const companies = [
        { src: './companies/thales.svg', message: 'Leading aerospace and defense company.' },
        { src: './companies/rct.svg', message: 'Innovative robotics and automation solutions.' },
        { src: './companies/marine.svg', message: 'Specialist in marine technology and engineering.' },
        { src: './companies/mindflow.svg', message: 'AI-driven workflow automation solutions.' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Companies Working With Me</h1>
            </div>

            <div className={styles.company}>
                <ul className={styles.companyList}>
                    {companies.map((company, index) => (
                        <li key={index} className={styles.companyItem}>
                            <div className={styles.imageWrapper}>
                                <Image src={company.src} alt="company logo" width={200} height={100} />
                                <div className={styles.hoverMessage}>{company.message}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
